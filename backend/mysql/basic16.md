---
prev:
  text: "存储过程与函数"
  link: "/backend/mysql/basic15"
next:
  text: "触发器"
  link: "/backend/mysql/basic17"
---

# 第 16 章 变量、流程控制与游标

## 1. 变量

在 MySQL 数据库的存储过程和函数中，可以使用变量来存储查询或计算的中间结果数据，或者输出最终的结果数据。

在 MySQL 数据库中，变量分为**系统变量**以及**用户自定义变量**。

### 1.1 系统变量

#### 1.1.1 系统变量分类

变量由系统定义，不是用户定义，属于**服务器**层面。启动 MySQL 服务，生成 MySQL 服务实例期间，
MySQL 将为 MySQL 服务器内存中的系统变量赋值，这些系统变量定义了当前 MySQL 服务实例的属性、特
征。这些系统变量的值要么是**编译 MySQL 时参数**的默认值，要么是**配置文件**（例如 my.ini 等）中的参数
值。大家可以通过网址 `https://dev.mysql.com/doc/refman/8.0/en/server-systemvariables.html` 查看 MySQL 文档的系统变量。

系统变量分为全局系统变量（需要添加 global 关键字）以及会话系统变量（需要添加 session 关键
字），有时也把全局系统变量简称为全局变量，有时也把会话系统变量称为 local 变量。**如果不写，默认会话级别**。静态变量（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）属于特殊的全局系统变量。

每一个 MySQL 客户机成功连接 MySQL 服务器后，都会产生与之对应的会话。会话期间，MySQL 服务实例
会在 MySQL 服务器内存中生成与该会话对应的会话系统变量，这些会话系统变量的初始值是全局系统变量值的复制。如下图：

![alt text](image01/image101.png)

- 全局系统变量针对于所有会话（连接）有效，但不能跨重启
- 会话系统变量仅针对于当前会话（连接）有效。会话期间，当前会话对某个会话系统变量值的修改，不会影响其他会话同一个会话系统变量的值。
- 会话 1 对某个全局系统变量值的修改会导致会话 2 中同一个全局系统变量值的修改。

在 MySQL 中有些系统变量只能是全局的，例如 max_connections 用于限制服务器的最大连接数；有些系
统变量作用域既可以是全局又可以是会话，例如 character_set_client 用于设置客户端的字符集；有些系
统变量的作用域只能是当前会话，例如 pseudo_thread_id 用于标记当前会话的 MySQL 连接 ID。

#### 1.1.2 查看系统变量

- **查看所有或部分系统变量**

```sql
-- 查看所有全局变量
SHOW GLOBAL VARIABLES;

-- 查看所有会话变量
SHOW SESSION VARIABLES;
-- 或
SHOW VARIABLES;
```

```sql
-- 查看满足条件的部分系统变量。
SHOW GLOBAL VARIABLES LIKE '%标识符%';

-- 查看满足条件的部分会话变量
SHOW SESSION VARIABLES LIKE '%标识符%';
```

举例：

```sql
SHOW GLOBAL VARIABLES LIKE 'admin_%';
```

- **查看指定系统变量**

作为 MySQL 编码规范，MySQL 中的系统变量以 两个“@” 开头，其中“@@global”仅用于标记全局系统变
量，“@@session”仅用于标记会话系统变量。“@@”首先标记会话系统变量，如果会话系统变量不存在，则标记全局系统变量。

```sql
-- 查看指定的系统变量的值
SELECT @@global.变量名;

-- 查看指定的会话变量的值
SELECT @@session.变量名;
-- 或者
SELECT @@变量名;
```

- **修改系统变量的值**

有些时候，数据库管理员需要修改系统变量的默认值，以便修改当前会话或者 MySQL 服务实例的属性、特征。具体方法：

方式 1：修改 MySQL 配置文件 ，继而修改 MySQL 系统变量的值（该方法需要重启 MySQL 服务）

方式 2：在 MySQL 服务运行期间，使用“set”命令重新设置系统变量的值

```sql
-- 为某个系统变量赋值
-- 方式1：
SET @@global.变量名=变量值;
-- 方式2：
SET GLOBAL 变量名=变量值;

-- 为某个会话变量赋值
-- 方式1：
SET @@session.变量名=变量值;
-- 方式2：
SET SESSION 变量名=变量值;
```

举例：

```sql
SELECT @@global.autocommit;
SET GLOBAL autocommit=0;
```

```sql
SELECT @@session.tx_isolation;
SET @@session.tx_isolation='read-uncommitted';
```

```sql
SET GLOBAL max_connections = 1000;
SELECT @@global.max_connections;
```

### 1.2 用户变量

#### 1.2.1 用户变量分类

用户变量是用户自己定义的，作为 MySQL 编码规范，MySQL 中的用户变量以 一个“@” 开头。根据作用范围不同，又分为 会话用户变量 和 局部变量 。

- 会话用户变量：作用域和会话变量一样，只对 当前连接 会话有效。
- 局部变量：只在 BEGIN 和 END 语句块中有效。局部变量只能在 存储过程和函数 中使用。

#### 1.2.2 会话用户变量

- 变量的定义

```sql
-- 方式1：“=”或“:=”
SET @用户变量 = 值;
SET @用户变量 := 值;

-- 方式2：“:=” 或 INTO关键字
SELECT @用户变量 := 表达式 [FROM 等子句];
SELECT 表达式 INTO @用户变量 [FROM 等子句];
```

- 查看用户变量的值 （查看、比较、运算等）

```sql
SELECT @用户变量
```

- 举例

```sql
SET @a = 1;
SELECT @a;
```

```sql
SELECT @num := COUNT(*) FROM employees;
SELECT @num;
```

```sql
SELECT AVG(salary) INTO @avgsalary FROM employees;
SELECT @avgsalary;
```

```sql
SELECT @big; --查看某个未声明的变量时，将得到NULL值
```

#### 1.2.3 局部变量

定义：可以使用 DECLARE 语句定义一个局部变量

作用域：仅仅在定义它的 BEGIN ... END 中有效

位置：只能放在 BEGIN ... END 中，而且只能放在第一句

```sql
BEGIN
    -- 声明局部变量
    DECLARE 变量名1 变量数据类型 [DEFAULT 变量默认值];
    DECLARE 变量名2,变量名3,... 变量数据类型 [DEFAULT 变量默认值];

    -- 为局部变量赋值
    SET 变量名1 = 值;
    SELECT 值 INTO 变量名2 [FROM 子句];

    -- 查看局部变量的值
    SELECT 变量1,变量2,变量3;
END
```

**1.定义变量**

```sql
DECLARE 变量名 类型 [default 值];
-- 如果没有DEFAULT子句，初始值为NULL
```

举例：

```sql
DECLARE myparam INT DEFAULT 100;
```

**2.变量赋值**

方式 1：一般用于赋简单的值

```sql
SET 变量名=值;
SET 变量名:=值;
```

方式 2：一般用于赋表中的字段值

```sql
SELECT 字段名或表达式 INTO 变量名 FROM 表;
```

**3.使用变量**（查看、比较、运算等）

```sql
SELECT 局部变量名;
```

举例 1：声明局部变量，并分别赋值为 employees 表中 employee_id 为 102 的 last_name 和 salary

```sql
DELIMITER //

CREATE PROCEDURE set_value()
BEGIN
    DECLARE emp_name VARCHAR(25);
    DECLARE sal DOUBLE(10,2);
    SELECT last_name,salary INTO emp_name,sal
    FROM employees
    WHERE employee_id = 102;
    SELECT emp_name,sal;
END //

DELIMITER;
```

举例 2：声明两个变量，求和并打印 （分别使用会话用户变量、局部变量的方式实现）

```sql
-- 方式1：使用用户变量
SET @m=1;
SET @n=1;
SET @sum=@m+@n;

SELECT @sum;
```

```sql
-- 方式2：使用局部变量
DELIMITER //

CREATE PROCEDURE add_value()
BEGIN
    -- 局部变量
    DECLARE m INT DEFAULT 1;
    DECLARE n INT DEFAULT 3;
    DECLARE SUM INT;

    SET SUM = m+n;
    SELECT SUM;
END //

DELIMITER ;
```

举例 3：创建存储过程“different_salary”查询某员工和他领导的薪资差距，并用 IN 参数 emp_id 接收员工
id，用 OUT 参数 dif_salary 输出薪资差距结果。

```sql
#声明
DELIMITER //
CREATE PROCEDURE different_salary(IN emp_id INT,OUT dif_salary DOUBLE)
BEGIN
    -- 声明局部变量
    DECLARE emp_sal,mgr_sal DOUBLE DEFAULT 0.0;
    DECLARE mgr_id INT;
    SELECT salary INTO emp_sal FROM employees WHERE employee_id = emp_id;
    SELECT manager_id INTO mgr_id FROM employees WHERE employee_id = emp_id;
    SELECT salary INTO mgr_sal FROM employees WHERE employee_id = mgr_id;
    SET dif_salary = mgr_sal - emp_sal;
END //

DELIMITER ;

-- 调用
SET @emp_id = 102;
CALL different_salary(@emp_id,@diff_sal);

-- 查看
SELECT @diff_sal;
```

#### 1.2.4 对比会话用户变量与局部变量

|              | 作用域                | 定义位置             | 语法                     |
| ------------ | --------------------- | -------------------- | ------------------------ |
| 会话用户变量 | 当前会话              | 会话的任何地方       | 加@符号，不用指定类型    |
| 局部变量     | 定义它的 BEGIN END 中 | BEGIN END 的第一句话 | 一般不用加@,需要指定类型 |

## 2. 定义条件与处理程序

**定义条件**是事先定义程序执行过程中可能遇到的问题， 处理程序 定义了在遇到问题时应当采取的处理方
式，并且保证存储过程或函数在遇到警告或错误时能继续执行。这样可以增强存储程序处理问题的能力，避免程序异常停止运行。

说明：定义条件和处理程序在存储过程、存储函数中都是支持的。

### 2.1 案例分析

### 2.2 定义条件

### 2.3 定义处理程序

### 2.4 案例解决

## 3. 流程控制

### 3.1 分支结构之 IF

### 3.2 分支结构之 CASE

### 3.3 循环结构之 LOOP

### 3.4 循环结构之 WHILE

### 3.5 循环结构之 REPEAT

### 3.6 跳转语句之 LEAVE 语句

### 3.7 跳转语句之 ITERATE 语句

## 4. 游标

### 4.1 什么是游标（或光标）

### 4.2 使用游标步骤

### 4.3 举例

### 4.4 小结

## 5. 补充：MySQL 8.0 的新特性—全局变量的持久化

<a-back-top />

<reading-progress-bar/>
