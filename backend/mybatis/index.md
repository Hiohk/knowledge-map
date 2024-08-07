# MyBatis

**符号说明**

- :white_check_mark: 需要学习者**掌握**的知识点；
- :heart: 高级开发者需要**重点掌握**的知识点；
- :rocket: 需要学习者**理解**的知识点；
- :star: 需要学习者**了解**的知识点；
- :x: 拓展知识点，可以不用学习；

::: warning 备注

- 本文内容来自于尚硅谷 MyBatis 教程
- 动力节点 MyBatis 笔记：[MyBatis](https://www.yuque.com/dujubin/ltckqu/pozck9?singleDoc#《MyBatis》) (password: rs4n)
- MyBatis 官方文档：[MyBatis](https://mybatis.org/mybatis-3/zh_CN/index.html)

:::

## 1. MyBatis 简介 :star:

### 1.1 MyBatis 历史

MyBatis 最初是 Apache 的一个开源项目 iBatis, 2010 年 6 月这个项目由 Apache Software Foundation 迁移到了 Google Code。随着开发团队转投 Google Code 旗下， iBatis3.x 正式更名为 MyBatis。代码于 2013 年 11 月迁移到 Github。

iBatis 一词来源于“internet”和“abatis”的组合，是一个基于 Java 的持久层框架。 iBatis 提供的持久层框架包括 SQL Maps 和 Data Access Objects（DAO）。

### 1.2 MyBatis 特性

1） MyBatis 是支持定制化 SQL、存储过程以及高级映射的优秀的持久层框架

2） MyBatis 避免了几乎所有的 JDBC 代码和手动设置参数以及获取结果集

3） MyBatis 可以使用简单的 XML 或注解用于配置和原始映射，将接口和 Java 的 POJO（Plain Old Java Objects，普通的 Java 对象）映射成数据库中的记录

4） MyBatis 是一个 半自动的 ORM（Object Relation Mapping）框架

### 1.3 MyBatis 下载

MyBatis 下载地址：`https://github.com/mybatis/mybatis-3`

![image-01](image/image-01.png)

![image-02](image/image-02.png)

### 1.4 和其它持久化层技术对比

#### JDBC

- SQL 夹杂在 Java 代码中耦合度高，导致硬编码内伤
- 维护不易且实际开发需求中 SQL 有变化，频繁修改的情况多见
- 代码冗长，开发效率低

#### Hibernate 和 JPA

- 操作简便，开发效率高
- 程序中的长难复杂 SQL 需要绕过框架
- 内部自动生产的 SQL，不容易做特殊优化
- 基于全映射的全自动框架，大量字段的 POJO 进行部分映射时比较困难。
- 反射操作太多，导致数据库性能下降

#### MyBatis

- 轻量级，性能出色
- SQL 和 Java 编码分开，功能边界清晰。Java 代码专注业务、SQL 语句专注数据
- 开发效率稍逊于 HIbernate，但是完全能够接受

## 2. 搭建 MyBatis :star:

### 2.1 开发环境

IDE：idea 2019.2

构建工具：maven 3.5.4

MySQL 版本：MySQL 5.7

MyBatis 版本：MyBatis 3.5.7

### 2.2 创建 maven 工程

- 打包方式：jar
- 引入依赖

```xml
<dependencies>
  <!--Mybatis核心-->
  <dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.7</version>
  </dependency>
  
  <!--junit测试-->
  <dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
  </dependency>
  
  <!--MySQL驱动-->
  <dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>5.1.3</version>
  </dependency>
</dependencies>
```

### 2.3 创建 MyBatis 的核心配置文件

> 习惯上命名为 `mybatis-config.xml`，这个文件名仅仅只是建议，并非强制要求。将来整合 Spring。
>
> 之后，这个配置文件可以省略，所以大家操作时可以直接复制、粘贴。
>
> 核心配置文件主要用于配置连接数据库的环境以及 MyBatis 的全局配置信息。
>
> 核心配置文件存放的位置是 `src/main/resources` 目录下。

```xml
<?xmlversion="1.0"encoding="UTF-8"?>
<!DOCTYPEconfiguration
    PUBLIC"-//mybatis.org//DTDConfig3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>
  <!--设置连接数据库的环境-->
  <environmentsdefault="development">
    <environmentid="development">
      <transactionManagertype="JDBC"/>
      <dataSourcetype="POOLED">
        <propertyname="driver" value="com.mysql.jdbc.Driver"/>
        <propertyname="url" value="jdbc:mysql://localhost:3306/MyBatis"/>
        <propertyname="username" value="root"/>
        <propertyname="password" value="123456"/>
      </dataSource>
    </environment>
  </environments>
  <!--引入映射文件-->
  <mappers>
    <mapperresource="mappers/UserMapper.xml"/>
  </mappers>
</configuration>
```

### 2.4 创建 mapper 接口

> MyBatis 中的 mapper 接口相当于以前的 dao。但是区别在于，mapper 仅仅是接口，我们不需要提供实现类。

```Java
public interface UserMapper {
    /**
    *添加用户信息
    */
    intinsertUser();
}
```

### 2.5 创建 MyBatis 的映射文件

相关概念：ORM（Object Relationship Mapping）对象关系映射。

- 对象：Java 的实体类对象
- 关系：关系型数据库
- 映射：二者之间的对应关系

| Java 概念 | 数据库概念 |
| --------- | ---------- |
| 类        | 表         |
| 属性      | 字段/列    |
| 对象      | 记录/行    |

> 1、映射文件的命名规则：
>
> 表所对应的实体类的类名+Mapper.xml
>
> 例如：表 t_user，映射的实体类为 User，所对应的映射文件为 UserMapper.xml
>
> 因此一个映射文件对应一个实体类，对应一张表的操作
>
> MyBatis 映射文件用于编写 SQL，访问以及操作表中的数据
>
> MyBatis 映射文件存放的位置是 src/main/resources/mappers 目录下
>
> 2、MyBatis 中可以面向接口操作数据，要保证两个一致：
>
> a>mapper 接口的全类名和映射文件的命名空间（namespace）保持一致
>
> b>mapper 接口中方法的方法名和映射文件中编写 SQL 的标签的 id 属性保持一致

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.atguigu.mybatis.mapper.UserMapper">
    <!--intinsertUser();-->  
    <insertid="insertUser">
        insertintot_uservalues(null,'张三','123',23,'女')
    </insert>
</mapper>
```

### 2.6 通过 junit 测试功能

```Java
//读取MyBatis的核心配置文件
InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
//创建SqlSessionFactoryBuilder对象
SqlSessionFactoryBuilder sqlSessionFactoryBuilder = new
SqlSessionFactoryBuilder();
//通过核心配置文件所对应的字节输入流创建工厂类SqlSessionFactory，生产SqlSession对象
SqlSessionFactory sqlSessionFactory = sqlSessionFactoryBuilder.build(is);
//创建SqlSession对象，此时通过SqlSession对象所操作的sql都必须手动提交或回滚事务
//SqlSession sqlSession = sqlSessionFactory.openSession();
//创建SqlSession对象，此时通过SqlSession对象所操作的sql都会自动提交
SqlSession sqlSession = sqlSessionFactory.openSession(true);
//通过代理模式创建UserMapper接口的代理实现类对象
UserMapper userMapper = sqlSession.getMapper(UserMapper.class);
//调用UserMapper接口中的方法，就可以根据UserMapper的全类名匹配元素文件，通过调用的方法名匹配
映射文件中的SQL标签，并执行标签中的SQL语句
int result = userMapper.insertUser();
//sqlSession.commit();
System.out.println("结果："+result);
```

### 2.7 加入 log4j 日志功能

**a. 加入依赖**

```xml
<!-- log4j日志 -->
<dependency>
    <groupId>log4j</groupId>
    <artifactId>log4j</artifactId>
    <version>1.2.17</version>
</dependency>
```

**b. 加入 log4j 的配置文件**

> log4j 的配置文件名为 `log4j.xml`，存放的位置是 `src/main/resources` 目录下

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration
    xmlns:log4j="http://jakarta.apache.org/log4j/">
    <appender name="STDOUT" class="org.apache.log4j.ConsoleAppender">
        <param name="Encoding" value="UTF-8" />
        <layout class="org.apache.log4j.PatternLayout">
            <param name="ConversionPattern" value="%-5p %d{MM-dd HH:mm:ss,SSS} %m (%F:%L) \n" />
        </layout>
    </appender>
    <logger name="java.sql">
        <level value="debug" />
    </logger>
    <logger name="org.apache.ibatis">
        <level value="info" />
    </logger>
    <root>
        <level value="debug" />
        <appender-ref ref="STDOUT" />
    </root>
</log4j:configuration>
```

> **日志的级别**
>
> FATAL(致命)>ERROR(错误)>WARN(警告)>INFO(信息)>DEBUG(调试)从左到右打印的内容越来越详细

## 3. 核心配置文件详解 :star:

核心配置文件中的标签必须按照固定的顺序：

`properties?,settings?,typeAliases?,typeHandlers?,objectFactory?,objectWrapperFactory?,reflectorFactory?,plugins?,environments?,databaseIdProvider?,mappers?`

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
PUBLIC "-//MyBatis.org//DTD Config 3.0//EN"
"http://MyBatis.org/dtd/MyBatis-3-config.dtd">
<configuration>
    <!--引入properties文件，此时就可以${属性名}的方式访问属性值-->
    <properties resource="jdbc.properties"></properties>
    <settings>
        <!--将表中字段的下划线自动转换为驼峰-->
        <setting name="mapUnderscoreToCamelCase" value="true"/>
        <!--开启延迟加载-->
        <setting name="lazyLoadingEnabled" value="true"/>
    </settings>
    <typeAliases>
        <!--
            typeAlias：设置某个具体的类型的别名
            属性：
            type：需要设置别名的类型的全类名
            alias：设置此类型的别名，若不设置此属性，该类型拥有默认的别名，即类名且不区分大小写
            若设置此属性，此时该类型的别名只能使用alias所设置的值
        -->
        <!--<typeAlias type="com.atguigu.mybatis.bean.User"></typeAlias>-->
        <!--<typeAlias type="com.atguigu.mybatis.bean.User" alias="abc"></typeAlias>-->
        <!--以包为单位，设置改包下所有的类型都拥有默认的别名，即类名且不区分大小写-->
        <package name="com.atguigu.mybatis.bean"/>
    </typeAliases>
    <!--
        environments：设置多个连接数据库的环境
        属性：
        default：设置默认使用的环境的id
    -->
    <environments default="mysql_test">
        <!--
            environment：设置具体的连接数据库的环境信息
            属性：
            id：设置环境的唯一标识，可通过environments标签中的default设置某一个环境的id，
            表示默认使用的环境
        -->
        <environment id="mysql_test">
            <!--
                transactionManager：设置事务管理方式
                属性：
                type：设置事务管理方式，type="JDBC|MANAGED"
                type="JDBC"：设置当前环境的事务管理都必须手动处理
                type="MANAGED"：设置事务被管理，例如spring中的AOP
            -->
            <transactionManager type="JDBC"/>
            <!--
                dataSource：设置数据源
                属性：
                type：设置数据源的类型，type="POOLED|UNPOOLED|JNDI"
                type="POOLED"：使用数据库连接池，即会将创建的连接进行缓存，下次使用可以从
                缓存中直接获取，不需要重新创建
                type="UNPOOLED"：不使用数据库连接池，即每次使用连接都需要重新创建
                type="JNDI"：调用上下文中的数据源
            -->
            <dataSource type="POOLED">
                <!--设置驱动类的全类名-->
                <property name="driver" value="${jdbc.driver}"/>
                <!--设置连接数据库的连接地址-->
                <property name="url" value="${jdbc.url}"/>
                <!--设置连接数据库的用户名-->
                <property name="username" value="${jdbc.username}"/>
                <!--设置连接数据库的密码-->
                <property name="password" value="${jdbc.password}"/>
            </dataSource>
        </environment>
    </environments>
    <!--引入映射文件-->
    <mappers>
        <mapper resource="UserMapper.xml"/>
        <!--
            以包为单位，将包下所有的映射文件引入核心配置文件
            注意：此方式必须保证mapper接口和mapper映射文件必须在相同的包下
        -->
        <package name="com.atguigu.mybatis.mapper"/>
    </mappers>
</configuration>

```

## 4. MyBatis 的增删改查 :white_check_mark:

### 4.1 添加

```xml
<!--int insertUser();-->
<insert id="insertUser">
    insert into t_user values(null,'admin','123456',23,'男')
</insert>
```

### 4.2 删除

```xml
<!--int deleteUser();-->
<delete id="deleteUser">
    delete from t_user where id = 7
</delete>
```

### 4.3 修改

```xml
<!--int updateUser();-->
<update id="updateUser">
    update t_user set username='ybc',password='123' where id = 6
</update>
```

### 4.4 查询一个实体类对象

```xml
<!--User getUserById();-->
<select id="getUserById" resultType="com.atguigu.mybatis.bean.User">
    select * from t_user where id = 2
</select>
```

### 4.5 查询集合

```xml
<!--List<User> getUserList();-->
<select id="getUserList" resultType="com.atguigu.mybatis.bean.User">
    select * from t_user
</select>
```

> 注意：
>
> 1、查询的标签 select 必须设置属性 resultType 或 resultMap，用于设置实体类和数据库表的映射关系
>
> resultType：自动映射，用于属性名和表中字段名一致的情况
>
> resultMap：自定义映射，用于一对多或多对一或字段名和属性名不一致的情况
>
> 2、当查询的数据为多条时，不能使用实体类作为返回值，只能使用集合，否则会抛出异常
>
> TooManyResultsException；但是若查询的数据只有一条，可以使用实体类或集合作为返回值

## 5. MyBatis 获取参数值的两种方式 :white_check_mark:

MyBatis 获取参数值的两种方式：`${}` 和 `#{}`。

`${}` 的本质就是字符串拼接，`#{}` 的本质就是占位符赋值。

`${}` 使用字符串拼接的方式拼接 sql，若为字符串类型或日期类型的字段进行赋值时，需要手动加单引号；但是 `#{}` 使用占位符赋值的方式拼接 sql，此时为字符串类型或日期类型的字段进行赋值时，可以自动添加单引号。

### 5.1 单个字面量类型的参数

若 mapper 接口中的方法参数为单个的字面量类型，此时可以使用 `${}` 和 `#{}` 以任意的名称获取参数的值，注意 `${}` 需要手动加单引号。

### 5.2 多个字面量类型的参数

若 mapper 接口中的方法参数为多个时，此时 MyBatis 会自动将这些参数放在一个 map 集合中，以 arg0,arg1...为键，以参数为值；以 param1,param2...为键，以参数为值；因此只需要通过 `${}` 和 `#{}` 访问 map 集合的键就可以获取相对应的
值，注意 `${}` 需要手动加单引号。

### 5.3 map 集合类型的参数

若 mapper 接口中的方法需要的参数为多个时，此时可以手动创建 map 集合，将这些数据放在 map 中只需要通过 `${}` 和 `#{}` 访问 map 集合的键就可以获取相对应的值，注意 `${}` 需要手动加单引号。

### 5.4 实体类类型的参数

若 mapper 接口中的方法参数为实体类对象时，此时可以使用 `${}` 和 `#{}`，通过访问实体类对象中的属性名获取属性值，注意 `${}` 需要手动加单引号。

### 5.5 使用@Param 标识参数

可以通过@Param 注解标识 mapper 接口中的方法参数，此时，会将这些参数放在 map 集合中，以@Param 注解的 value 属性值为键，以参数为值；以 param1,param2...为键，以参数为值；只需要通过 `${}` 和 `#{}` 访问 map 集合的键就可以获取相对应的值，注意 `${}` 需要手动加单引号。

## 6. MyBatis 的各种查询功能 :white_check_mark:

### 6.1 查询一个实体类对象

```Java
/**
* 根据用户id查询用户信息
* @param id
* @return
*/
User getUserById(@Param("id") int id);
```

```xml
<!--User getUserById(@Param("id") int id);-->
<select id="getUserById" resultType="User">
    select * from t_user where id = #{id}
</select>
```

### 6.2 查询一个 list 集合

```Java
/**
* 查询所有用户信息
* @return
*/
List<User> getUserList();
```

```xml
<!--List<User> getUserList();-->
<select id="getUserList" resultType="User">
    select * from t_user
</select>
```

### 6.3 查询单个数据

```Java
/**
* 查询用户的总记录数
* @return
* 在MyBatis中，对于Java中常用的类型都设置了类型别名
* 例如：java.lang.Integer-->int|integer
* 例如：int-->_int|_integer
* 例如：Map-->map,List-->list
*/
int getCount();
```

```xml
<!--int getCount();-->
<select id="getCount" resultType="_integer">
    select count(id) from t_user
</select>
```

### 6.4 查询一条数据为 map 集合

```Java
/**
* 根据用户id查询用户信息为map集合
* @param id
* @return
*/
Map<String, Object> getUserToMap(@Param("id") int id);
```

```xml
<!--Map<String, Object> getUserToMap(@Param("id") int id);-->
<select id="getUserToMap" resultType="map">
    select * from t_user where id = #{id}
</select>
<!--结果：{password=123456, sex=男, id=1, age=23, username=admin}-->
```

### 6.5 查询多条数据为 map 集合

#### 方式一

```Java
/**
* 查询所有用户信息为map集合
* @return
* 将表中的数据以map集合的方式查询，一条数据对应一个map；若有多条数据，就会产生多个map集合，此
时可以将这些map放在一个list集合中获取
*/
List<Map<String, Object>> getAllUserToMap();
```

```xml
<!--Map<String, Object> getAllUserToMap();-->
<select id="getAllUserToMap" resultType="map">
    select * from t_user
</select>
```

#### 方式二

```Java
/**
* 查询所有用户信息为map集合
* @return
* 将表中的数据以map集合的方式查询，一条数据对应一个map；若有多条数据，就会产生多个map集合，并
且最终要以一个map的方式返回数据，此时需要通过@MapKey注解设置map集合的键，值是每条数据所对应的
map集合
*/
@MapKey("id")
Map<String, Object> getAllUserToMap();
```

```xml
<!--Map<String, Object> getAllUserToMap();-->
<select id="getAllUserToMap" resultType="map">
    select * from t_user
</select>
<!-- 结果： -->
<!--
{
    1={password=123456, sex=男, id=1, age=23, username=admin},
    2={password=123456, sex=男, id=2, age=23, username=张三},
    3={password=123456, sex=男, id=3, age=23, username=张三}
}
-->
```

## 7. 特殊 SQL 的执行 :white_check_mark:

### 7.1 模糊查询

```Java
/**
* 测试模糊查询
* @param mohu
* @return
*/
List<User> testMohu(@Param("mohu") String mohu);
```

```xml
<!--List<User> testMohu(@Param("mohu") String mohu);-->
<select id="testMohu" resultType="User">
    <!--select * from t_user where username like '%${mohu}%'-->
    <!--select * from t_user where username like concat('%',#{mohu},'%')-->
    select * from t_user where username like "%"#{mohu}"%"
</select>
```

### 7.2 批量删除

```Java
/**
* 批量删除
* @param ids
* @return
*/
int deleteMore(@Param("ids") String ids);
```

```xml
<!--int deleteMore(@Param("ids") String ids);-->
<delete id="deleteMore">
    delete from t_user where id in (${ids})
</delete>
```

### 7.3 动态设置表名

```Java
/**
* 动态设置表名，查询所有的用户信息
* @param tableName
* @return
*/
List<User> getAllUser(@Param("tableName") String tableName);
```

```xml
<!--List<User> getAllUser(@Param("tableName") String tableName);-->
<select id="getAllUser" resultType="User">
    select * from ${tableName}
</select>
```

### 7.4 添加功能获取自增的主键

`t_clazz(clazz_id,clazz_name)`

`t_student(student_id,student_name,clazz_id)`

1、添加班级信息

2、获取新添加的班级的 id

3、为班级分配学生，即将某学的班级 id 修改为新添加的班级的 id

```Java
/**
* 添加用户信息
* @param user
* @return
* useGeneratedKeys：设置使用自增的主键
* keyProperty：因为增删改有统一的返回值是受影响的行数，因此只能将获取的自增的主键放在传输的参
数user对象的某个属性中
*/
int insertUser(User user);
```

```xml
<!--int insertUser(User user);-->
<insert id="insertUser" useGeneratedKeys="true" keyProperty="id">
    insert into t_user values(null,#{username},#{password},#{age},#{sex})
</insert>
```

## 8. 自定义映射 resultMap :white_check_mark:

### 8.1 resultMap 处理字段和属性的映射关系

若字段名和实体类中的属性名不一致，则可以通过 resultMap 设置自定义映射

```xml
<!--
resultMap：设置自定义映射
属性：
id：表示自定义映射的唯一标识
type：查询的数据要映射的实体类的类型
子标签：
id：设置主键的映射关系
result：设置普通字段的映射关系
association：设置多对一的映射关系
collection：设置一对多的映射关系
属性：
property：设置映射关系中实体类中的属性名
column：设置映射关系中表中的字段名
-->
<resultMap id="userMap" type="User">
    <id property="id" column="id"></id>
    <result property="userName" column="user_name"></result>
    <result property="password" column="password"></result>
    <result property="age" column="age"></result>
    <result property="sex" column="sex"></result>
</resultMap>
<!--List<User> testMohu(@Param("mohu") String mohu);-->
<select id="testMohu" resultMap="userMap">
    <!--select * from t_user where username like '%${mohu}%'-->
select id,user_name,password,age,sex from t_user where user_name like
concat('%',#{mohu},'%')

</select>
```

> 若字段名和实体类中的属性名不一致，但是字段名符合数据库的规则（使用\*），实体类中的属性名符合 Java 的规则（使用驼峰）
>
> 此时也可通过以下两种方式处理字段名和实体类中的属性的映射关系：
>
> a. 可以通过为字段起别名的方式，保证和实体类中的属性名保持一致
>
> b. 可以在 MyBatis 的核心配置文件中设置一个全局配置信息 mapUnderscoreToCamelCase，可以在查询表中数据时，自动将\*类型的字段名转换为驼峰
>
> 例如：字段名 user_name，设置了 mapUnderscoreToCamelCase，此时字段名就会转换为 userName

### 8.2 多对一映射处理

> 查询员工信息以及员工所对应的部门信息

**a. 级联方式处理映射关系**

```xml
<resultMap id="empDeptMap" type="Emp">
    <id column="eid" property="eid"></id>
    <result column="ename" property="ename"></result>
    <result column="age" property="age"></result>
    <result column="sex" property="sex"></result>
    <result column="did" property="dept.did"></result>
    <result column="dname" property="dept.dname"></result>
</resultMap>
<!--Emp getEmpAndDeptByEid(@Param("eid") int eid);-->
<select id="getEmpAndDeptByEid" resultMap="empDeptMap">
    select emp.*,dept.* from t_emp emp left join t_dept dept on emp.did =
    dept.did where emp.eid = #{eid}
</select>

```

**b. 使用 association 处理映射关系**

```xml
<resultMap id="empDeptMap" type="Emp">
    <id column="eid" property="eid"></id>
    <result column="ename" property="ename"></result>
    <result column="age" property="age"></result>
    <result column="sex" property="sex"></result>
    <association property="dept" javaType="Dept">
        <id column="did" property="did"></id>
        <result column="dname" property="dname"></result>
    </association>
</resultMap>
<!--Emp getEmpAndDeptByEid(@Param("eid") int eid);-->
<select id="getEmpAndDeptByEid" resultMap="empDeptMap">
    select emp.*,dept.* from t_emp emp left join t_dept dept on emp.did =
    dept.did where emp.eid = #{eid}
</select>
```

**c. 分步查询**

1）查询员工信息

```Java
/**
* 通过分步查询查询员工信息
* @param eid
* @return
*/
Emp getEmpByStep(@Param("eid") int eid);
```

```xml
<resultMap id="empDeptStepMap" type="Emp">
    <id column="eid" property="eid"></id>
    <result column="ename" property="ename"></result>
    <result column="age" property="age"></result>
    <result column="sex" property="sex"></result>
    <!--
        select：设置分步查询，查询某个属性的值的sql的标识（namespace.sqlId）
        column：将sql以及查询结果中的某个字段设置为分步查询的条件
    -->
    <association property="dept"
        select="com.atguigu.MyBatis.mapper.DeptMapper.getEmpDeptByStep" column="did">
    </association>
</resultMap>
<!--Emp getEmpByStep(@Param("eid") int eid);-->
<select id="getEmpByStep" resultMap="empDeptStepMap">
    select * from t_emp where eid = #{eid}
</select>
```

2）根据员工所对应的部门 id 查询部门信息

```Java
/**
* 分步查询的第二步：根据员工所对应的did查询部门信息
* @param did
* @return
*/
Dept getEmpDeptByStep(@Param("did") int did);
```

```xml
<!--Dept getEmpDeptByStep(@Param("did") int did);-->
<select id="getEmpDeptByStep" resultType="Dept">
    select * from t_dept where did = #{did}
</select>
```

### 8.3 一对多映射处理

**a. collection**

```xml
/**
* 根据部门id查新部门以及部门中的员工信息
* @param did
* @return
*/
Dept getDeptEmpByDid(@Param("did") int did);

<resultMap id="deptEmpMap" type="Dept">
    <id property="did" column="did"></id>
    <result property="dname" column="dname"></result>
    <!--
        ofType：设置collection标签所处理的集合属性中存储数据的类型
    -->
    <collection property="emps" ofType="Emp">
        <id property="eid" column="eid"></id>
        <result property="ename" column="ename"></result>
        <result property="age" column="age"></result>
        <result property="sex" column="sex"></result>
    </collection>
</resultMap>
<!--Dept getDeptEmpByDid(@Param("did") int did);-->
<select id="getDeptEmpByDid" resultMap="deptEmpMap">
    select dept.*,emp.* from t_dept dept left join t_emp emp on dept.did =
    emp.did where dept.did = #{did}
</select>
```

**b. 分步查询**

1）查询部门信息

```Java
/**
* 分步查询部门和部门中的员工
* @param did
* @return
*/
Dept getDeptByStep(@Param("did") int did);
```

```xml
<resultMap id="deptEmpStep" type="Dept">
    <id property="did" column="did"></id>
    <result property="dname" column="dname"></result>
    <collection property="emps" fetchType="eager"
        select="com.atguigu.MyBatis.mapper.EmpMapper.getEmpListByDid" column="did">
    </collection>
</resultMap>
<!--Dept getDeptByStep(@Param("did") int did);-->
<select id="getDeptByStep" resultMap="deptEmpStep">
    select * from t_dept where did = #{did}
</select>
```

2）根据部门 id 查询部门中的所有员工

```Java
/**
* 根据部门id查询员工信息
* @param did
* @return
*/
List<Emp> getEmpListByDid(@Param("did") int did);
```

```xml
<!--List<Emp> getEmpListByDid(@Param("did") int did);-->
<select id="getEmpListByDid" resultType="Emp">
    select * from t_emp where did = #{did}
</select>
```

> 分步查询的优点：可以实现延迟加载，但是必须在核心配置文件中设置全局配置信息：
>
> lazyLoadingEnabled：延迟加载的全局开关。当开启时，所有关联对象都会延迟加载
>
> aggressiveLazyLoading：当开启时，任何方法的调用都会加载该对象的所有属性。 否则，每个属性会按需加载
>
> 此时就可以实现按需加载，获取的数据是什么，就只会执行相应的 sql。此时可通过 association 和 collection 中的 fetchType 属性设置当前的分步查询是否使用延迟加载，fetchType="lazy(延迟加载)|eager(立即加载)"

## 9. 动态 SQL :white_check_mark:

### 9.1 if

if 标签可通过 test 属性的表达式进行判断，若表达式的结果为 true，则标签中的内容会执行；反之标签中的内容不会执行。

```xml
<!--List<Emp> getEmpListByMoreTJ(Emp emp);-->
<select id="getEmpListByMoreTJ" resultType="Emp">
    select * from t_emp where 1=1
    <if test="ename != '' and ename != null">
        and ename = #{ename}
    </if>
    <if test="age != '' and age != null">
        and age = #{age}
    </if>
    <if test="sex != '' and sex != null">
        and sex = #{sex}
    </if>
</select>
```

### 9.2 where

```xml
<select id="getEmpListByMoreTJ2" resultType="Emp">
    select * from t_emp
    <where>
        <if test="ename != '' and ename != null">
            ename = #{ename}
        </if>
        <if test="age != '' and age != null">
            and age = #{age}
        </if>
        <if test="sex != '' and sex != null">
            and sex = #{sex}
        </if>
    </where>
</select>
```

> where 和 if 一般结合使用：
>
> a. 若 where 标签中的 if 条件都不满足，则 where 标签没有任何功能，即不会添加 where 关键字
>
> b. 若 where 标签中的 if 条件满足，则 where 标签会自动添加 where 关键字，并将条件最前方多余的 and 去掉
>
> 注意：where 标签不能去掉条件最后多余的 and

### 9.3 trim

```xml
<select id="getEmpListByMoreTJ" resultType="Emp">
    select * from t_emp
    <trim prefix="where" suffixOverrides="and">
        <if test="ename != '' and ename != null">
            ename = #{ename} and
        </if>
        <if test="age != '' and age != null">
            age = #{age} and
        </if>
        <if test="sex != '' and sex != null">
            sex = #{sex}
        </if>
    </trim>
</select>
```

> trim 用于去掉或添加标签中的内容
>
> 常用属性：
>
> prefix：在 trim 标签中的内容的前面添加某些内容
>
> prefixOverrides：在 trim 标签中的内容的前面去掉某些内容
>
> suffix：在 trim 标签中的内容的后面添加某些内容
>
> suffixOverrides：在 trim 标签中的内容的后面去掉某些内容

### 9.4 choose、when、otherwise

choose、when、otherwise 相当于 if...else if..else

```xml
<!--List<Emp> getEmpListByChoose(Emp emp);-->
<select id="getEmpListByChoose" resultType="Emp">
    select <include refid="empColumns"></include> from t_emp
    <where>
        <choose>
            <when test="ename != '' and ename != null">
                ename = #{ename}
            </when>
            <when test="age != '' and age != null">
                age = #{age}
            </when>
            <when test="sex != '' and sex != null">
                sex = #{sex}
            </when>
            <when test="email != '' and email != null">
                email = #{email}
            </when>
        </choose>
    </where>
</select>
```

### 9.5 foreach

```xml
<!--int insertMoreEmp(List<Emp> emps);-->
<insert id="insertMoreEmp">
    insert into t_emp values
    <foreach collection="emps" item="emp" separator=",">
        (null,#{emp.ename},#{emp.age},#{emp.sex},#{emp.email},null)
    </foreach>
</insert>
<!--int deleteMoreByArray(int[] eids);-->
<delete id="deleteMoreByArray">
    delete from t_emp where
    <foreach collection="eids" item="eid" separator="or">
        eid = #{eid}
    </foreach>
</delete>
<!--int deleteMoreByArray(int[] eids);-->
<delete id="deleteMoreByArray">
    delete from t_emp where eid in
    <foreach collection="eids" item="eid" separator="," open="(" close=")">
        #{eid}
    </foreach>
</delete>
```

> 属性：
>
> collection：设置要循环的数组或集合
>
> item：表示集合或数组中的每一个数据
>
> separator：设置循环体之间的分隔符
>
> open：设置 foreach 标签中的内容的开始符
>
> close：设置 foreach 标签中的内容的结束符
>
> ### 9.6 SQL 片段

sql 片段，可以记录一段公共 sql 片段，在使用的地方通过 include 标签进行引入

```xml
<sql id="empColumns">
    eid,ename,age,sex,did
</sql>
select <include refid="empColumns"></include> from t_emp
```

## 10. MyBatis 的缓存 :white_check_mark:

### 10.1 MyBatis 的一级缓存

一级缓存是 SqlSession 级别的，通过同一个 SqlSession 查询的数据会被缓存，下次查询相同的数据，就会从缓存中直接获取，不会从数据库重新访问。

使一级缓存失效的四种情况：

1. 不同的 SqlSession 对应不同的一级缓存
2. 同一个 SqlSession 但是查询条件不同
3. 同一个 SqlSession 两次查询期间执行了任何一次增删改操作
4. 同一个 SqlSession 两次查询期间手动清空了缓存

### 10.2 MyBatis 的二级缓存

二级缓存是 SqlSessionFactory 级别，通过同一个 SqlSessionFactory 创建的 SqlSession 查询的结果会被缓存；此后若再次执行相同的查询语句，结果就会从缓存中获取。

二级缓存开启的条件：

1. 在核心配置文件中，设置全局配置属性 cacheEnabled="true"，默认为 true，不需要设置
2. 在映射文件中设置标签 `<cache />`
3. 二级缓存必须在 SqlSession 关闭或提交之后有效
4. 查询的数据所转换的实体类类型必须实现序列化的接口

使二级缓存失效的情况：

两次查询之间执行了任意的增删改，会使一级和二级缓存同时失效

### 10.3 二级缓存的相关配置

在 mapper 配置文件中添加的 cache 标签可以设置一些属性：

- eviction 属性：缓存回收策略

  LRU（Least Recently Used） – 最近最少使用的：移除最长时间不被使用的对象。

  FIFO（First in First out） – 先进先出：按对象进入缓存的顺序来移除它们。

  SOFT – 软引用：移除基于垃圾回收器状态和软引用规则的对象。

  WEAK – 弱引用：更积极地移除基于垃圾收集器状态和弱引用规则的对象。

  默认的是 LRU。

- flushInterval 属性：刷新间隔，单位毫秒

  默认情况是不设置，也就是没有刷新间隔，缓存仅仅调用语句时刷新

- size 属性：引用数目，正整数

  代表缓存最多可以存储多少个对象，太大容易导致内存溢出

- readOnly 属性：只读，true/false

  true：只读缓存；会给所有调用者返回缓存对象的相同实例。因此这些对象不能被修改。这提供了
  很重要的性能优势。

  false：读写缓存；会返回缓存对象的拷贝（通过序列化）。这会慢一些，但是安全，因此默认是 false。

### 10.4 MyBatis 缓存查询的顺序

- 先查询二级缓存，因为二级缓存中可能会有其他程序已经查出来的数据，可以拿来直接使用。
- 如果二级缓存没有命中，再查询一级缓存
- 如果一级缓存也没有命中，则查询数据库
- SqlSession 关闭之后，一级缓存中的数据会写入二级缓存

### 10.5 整合第三方缓存 EHCache

**a. 添加依赖**

```xml
<!-- Mybatis EHCache整合包 -->
<dependency>
    <groupId>org.mybatis.caches</groupId>
    <artifactId>mybatis-ehcache</artifactId>
    <version>1.2.1</version>
</dependency>
<!-- slf4j日志门面的一个具体实现 -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.2.3</version>
</dependency>
```

**b. 各 jar 包功能**
|jar 包名称 |作用|
|--------|----------------|
|mybatis-ehcache| Mybatis 和 EHCache 的整合包|
|ehcache| EHCache 核心包|
|slf4j-api| SLF4J 日志门面包|
|logback-classic| 支持 SLF4J 门面接口的一个具体实现|

**c. 创建 EHCache 的配置文件 ehcache.xml**

```xml
<?xml version="1.0" encoding="utf-8" ?>
<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         si:noNamespaceSchemaLocation="../config/ehcache.xsd">
    <!-- 磁盘保存路径 -->
    <diskStore path="D:\atguigu\ehcache"/>
    <defaultCache
        maxElementsInMemory="1000"
        maxElementsOnDisk="10000000"
        eternal="false"
        overflowToDisk="true"
        timeToIdleSeconds="120"
        timeToLiveSeconds="120"
        diskExpiryThreadIntervalSeconds="120"
        memoryStoreEvictionPolicy="LRU">
    </defaultCache>
</ehcache>
```

**d. 设置二级缓存的类型**

```xml
<cache type="org.mybatis.caches.ehcache.EhcacheCache"/>
```

**e. 加入 logback 日志**
存在 SLF4J 时，作为简易日志的 log4j 将失效，此时我们需要借助 SLF4J 的具体实现 logback 来打印日志。

创建 logback 的配置文件 `logback.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
    <!-- 指定日志输出的位置 -->
    <appender name="STDOUT"
        class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <!-- 日志输出的格式 -->
            <!-- 按照顺序分别是：时间、日志级别、线程名称、打印日志的类、日志主体内容、换行 -->
            <pattern>[%d{HH:mm:ss.SSS}] [%-5level] [%thread] [%logger] [%msg]%n</pattern>
        </encoder>
    </appender>
    <!-- 设置全局日志级别。日志级别按顺序分别是：DEBUG、INFO、WARN、ERROR -->
    <!-- 指定任何一个日志级别都只打印当前级别和后面级别的日志。 -->
    <root level="DEBUG">
        <!-- 指定打印日志的appender，这里通过“STDOUT”引用了前面配置的appender -->
        <appender-ref ref="STDOUT" />
    </root>
    <!-- 根据特殊需求指定局部日志级别 -->
    <logger name="com.atguigu.crowd.mapper" level="DEBUG"/>

</configuration>
```

**f. EHCache 配置文件说明**

| 属性名                          | 是否必须 | 作用                                                                                                                                                  |
| ------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| maxElementsInMemory             | 是       | 在内存中缓存的 element 的最大数目                                                                                                                     |
| maxElementsOnDisk               | 是       | 在磁盘上缓存的 element 的最大数目，若是 0 表示无穷大                                                                                                  |
| eternal                         | 是       | 设定缓存的 elements 是否永远不过期。 如果为 true，则缓存的数据始终有效， 如果为 false 那么还要根据 timeToIdleSeconds、timeToLiveSeconds 判断          |
| overflowToDisk                  | 是       | 设定当内存缓存溢出的时候是否将过期的 element 缓存到磁盘上                                                                                             |
| timeToIdleSeconds               | 否       | 当缓存在 EhCache 中的数据前后两次访问的时间超过 timeToIdleSeconds 的属性取值时， 这些数据便会删除，默认值是 0,也就是可闲置时间无穷大                  |
| timeToLiveSeconds               | 否       | 缓存 element 的有效生命期，默认是 0.,也就是 element 存活时间无穷大                                                                                    |
| diskSpoolBufferSizeMB           | 否       | DiskStore(磁盘缓存)的缓存区大小。默认是 30MB。每个 Cache 都应该有自己的一个缓冲区                                                                     |
| diskPersistent                  | 否       | 在 VM 重启的时候是否启用磁盘保存 EhCache 中的数据，默认是 false。                                                                                     |
| diskExpiryThreadIntervalSeconds | 否       | 磁盘缓存的清理线程运行间隔，默认是 120 秒。每个 120s， 相应的线程会进行一次 EhCache 中数据的清理工作                                                  |
| memoryStoreEvictionPolicy       | 否       | 当内存缓存达到最大，有新的 element 加入的时候， 移除缓存中 element 的策略。 默认是 LRU（最近最少使用），可选的有 LFU（最不常使用）和 FIFO（先进先出） |

## 11. MyBatis 的逆向工程 :white_check_mark:

正向工程：先创建 Java 实体类，由框架负责根据实体类生成数据库表。Hibernate 是支持正向工程
的。

逆向工程：先创建数据库表，由框架负责根据数据库表，反向生成如下资源：

- Java 实体类
- Mapper 接口
- Mapper 映射文件

### 11.1 创建逆向工程的步骤

**a. 添加依赖和插件**

```xml
<!-- 依赖MyBatis核心包 -->
<dependencies>
    <dependency>
        <groupId>org.mybatis</groupId>
        <artifactId>mybatis</artifactId>
        <version>3.5.7</version>
    </dependency>
</dependencies>
<!-- 控制Maven在构建过程中相关配置 -->
<build>
    <!-- 构建过程中用到的插件 -->
    <plugins>
        <!-- 具体插件，逆向工程的操作是以构建过程中插件形式出现的 -->
        <plugin>
            <groupId>org.mybatis.generator</groupId>
            <artifactId>mybatis-generator-maven-plugin</artifactId>
            <version>1.3.0</version>
            <!-- 插件的依赖 -->
            <dependencies>
                <!-- 逆向工程的核心依赖 -->
                <dependency>
                    <groupId>org.mybatis.generator</groupId>
                    <artifactId>mybatis-generator-core</artifactId>
                    <version>1.3.2</version>
                </dependency>
                <!-- 数据库连接池 -->
                <dependency>
                    <groupId>com.mchange</groupId>
                    <artifactId>c3p0</artifactId>
                    <version>0.9.2</version>
                </dependency>
                <!-- MySQL驱动 -->
                <dependency>
                    <groupId>mysql</groupId>
                    <artifactId>mysql-connector-java</artifactId>
                    <version>5.1.8</version>
                </dependency>
            </dependencies>
        </plugin>
    </plugins>
</build>
```

**b. 创建 MyBatis 的核心配置文件**

**c. 创建逆向工程的配置文件**

> 文件名必须是：generatorConfig.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
    PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
    "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>
    <!--
        targetRuntime: 执行生成的逆向工程的版本
        MyBatis3Simple: 生成基本的CRUD（清新简洁版）
        MyBatis3: 生成带条件的CRUD（奢华尊享版）
    -->
    <context id="DB2Tables" targetRuntime="MyBatis3Simple">
        <!-- 数据库的连接信息 -->
        <jdbcConnection driverClass="com.mysql.jdbc.Driver"
            connectionURL="jdbc:mysql://localhost:3306/mybatis"
            userId="root"
            password="123456">
        </jdbcConnection>
        <!-- javaBean的生成策略-->
        <javaModelGenerator targetPackage="com.atguigu.mybatis.bean" targetProject=".\src\main\java">
            <property name="enableSubPackages" value="true" />
            <property name="trimStrings" value="true" />
        </javaModelGenerator>
        <!-- SQL映射文件的生成策略 -->
        <sqlMapGenerator targetPackage="com.atguigu.mybatis.mapper" targetProject=".\src\main\resources">
            <property name="enableSubPackages" value="true" />
        </sqlMapGenerator>
        <!-- Mapper接口的生成策略 -->
        <javaClientGenerator type="XMLMAPPER" targetPackage="com.atguigu.mybatis.mapper" targetProject=".\src\main\java">
            <property name="enableSubPackages" value="true" />
        </javaClientGenerator>
        <!-- 逆向分析的表 -->
        <!-- tableName设置为*号，可以对应所有表，此时不写domainObjectName -->
        <!-- domainObjectName属性指定生成出来的实体类的类名 -->
        <table tableName="t_emp" domainObjectName="Emp"/>
        <table tableName="t_dept" domainObjectName="Dept"/>
    </context>
</generatorConfiguration>
```

**d. 执行 MBG 插件的 generate 目标**

![image-03](image/image-03.png)

效果：

![image-04](image/image-04.png)

### 11.2 QBC 查询

```java
@Test
public void testMBG() throws IOException {
    InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
    SqlSession sqlSession = new
        SqlSessionFactoryBuilder().build(is).openSession(true);
    EmpMapper mapper = sqlSession.getMapper(EmpMapper.class);
    EmpExample empExample = new EmpExample();
    //创建条件对象，通过andXXX方法为SQL添加查询添加，每个条件之间是and关系
    empExample.createCriteria().andEnameLike("a").andAgeGreaterThan(20).andDidIsNotNull();
    //将之前添加的条件通过or拼接其他条件
    empExample.or().andSexEqualTo("男");
    List<Emp> list = mapper.selectByExample(empExample);
    for (Emp emp : list) {
        System.out.println(emp);
    }
}
```

## 12. 分页插件 :white_check_mark:

### 12.1 分页插件使用步骤

**a. 添加依赖**

```xml
<!-- https://mvnrepository.com/artifact/com.github.pagehelper/pagehelper -->
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.2.0</version>
</dependency>
```

**b. 配置分页插件**

在 MyBatis 的核心配置文件中配置插件

```xml
<plugins>
    <!--设置分页插件-->
    <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
</plugins>
```

### 12.2 分页插件的使用

a. 在查询功能之前使用 `PageHelper.startPage(int pageNum, int pageSize)` 开启分页功能

> pageNum：当前页的页码
> pageSize：每页显示的条数

b. 在查询获取 list 集合之后，使用 `PageInfo<T> pageInfo = new PageInfo<>(List<T> list, intnavigatePages)` 获取分页相关数据

> list：分页之后的数据
> navigatePages：导航分页的页码数

c. 分页相关数据

> PageInfo {
> pageNum=8, pageSize=4, size=2, startRow=29, endRow=30, total=30, pages=8,
>
> list=Page{count=true, pageNum=8, pageSize=4, startRow=28, endRow=32, total=30,
> pages=8, reasonable=false, pageSizeZero=false},
>
> prePage=7, nextPage=0, isFirstPage=false, isLastPage=true, hasPreviousPage=true,
> hasNextPage=false, navigatePages=5, navigateFirstPage4, navigateLastPage8,
> navigatepageNums=[4, 5, 6, 7, 8]
> }
>
> 常用数据：
> pageNum：当前页的页码
>
> pageSize：每页显示的条数
>
> size：当前页显示的真实条数
>
> total：总记录数
>
> pages：总页数
>
> prePage：上一页的页码
>
> nextPage：下一页的页码
>
> isFirstPage/isLastPage：是否为第一页/最后一页
>
> hasPreviousPage/hasNextPage：是否存在上一页/下一页
>
> navigatePages：导航分页的页码数
>
> navigatepageNums：导航分页的页码，[1,2,3,4,5]

<a-back-top />

<reading-progress-bar/>
