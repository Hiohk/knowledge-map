# MyBatis Plus

**符号说明**

- :white_check_mark: 需要学习者**掌握**的知识点；
- :heart: 高级开发者需要**重点掌握**的知识点；
- :rocket: 需要学习者**理解**的知识点；
- :star: 需要学习者**了解**的知识点；
- :x: 拓展知识点，可以不用学习；

## 第 1 章 简介

### 1.1 MyBatisPlus 介绍

![alt text](image/image01.png)

MyBatis-Plus(简称 MP),是一个 MyBatis 的增强工具包，只做增强不做改变. 为简化开发工作、提高生产率而生。

我们的愿景是成为 Mybatis 最好的搭档，就像 魂斗罗 中的 1P、2P，基友搭配，效率翻倍。

### 1.2 代码及文档发布地址

- 官方地址: [http://mp.baomidou.com](http://mp.baomidou.com)

- 代码发布地址:

  Github: [https://github.com/baomidou/mybatis-plus](https://github.com/baomidou/mybatis-plus)

  Gitee: [https://gitee.com/baomidou/mybatis-plus](https://gitee.com/baomidou/mybatis-plus)

- 文档发布地址: [http://mp.baomidou.com/#/?id=%E7%AE%80%E4%BB%8B](http://mp.baomidou.com/#/?id=%E7%AE%80%E4%BB%8B)

### 1.3 前置知识

- Mybatis
- Spring
- Maven

## 第 2 章 集成 MP

### 2.1 创建测试表

```shell
-- 创建库
CREATE DATABASE mp;
-- 使用库
USE mp;
-- 创建表
CREATE TABLE tbl_employee(
 id INT(11) PRIMARY KEY AUTO_INCREMENT,
 last_name VARCHAR(50),
 email VARCHAR(50),
 gender CHAR(1),
 age int
);
INSERT INTO tbl_employee(last_name,email,gender,age) VALUES('Tom','tom@atguigu.com',1,22);
INSERT INTO tbl_employee(last_name,email,gender,age) VALUES('Jerry','jerry@atguigu.com',0,25);
INSERT INTO tbl_employee(last_name,email,gender,age) VALUES('Black','black@atguigu.com',1,30);
INSERT INTO tbl_employee(last_name,email,gender,age) VALUES('White','white@atguigu.com',0,35);
```

### 2.2 创建 javaBean

```Java
public class Employee {
    private Integer id ;
    private String lastName;
    private String email ;
    private Integer gender ;
    private Integer age ;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public Integer getGender() {
        return gender;
    }
    public void setGender(Integer gender) {
        this.gender = gender;
    }
    public Integer getAge() {
        return age;
    }
    public void setAge(Integer age) {
        this.age = age;
    }
    @Override
    public String toString() {
        return "Employee [id=" + id + ", lastName="
            + lastName + ", email=" + email
            + ", gender=" + gender + ", age="
            + age + "]";
    }
}
```

### 2.3 依赖配置

#### (1) 在 pom.xml 中加入对 MP、Spring、连接池、Junit、Mysql 驱动等依赖

```xml
<!-- mp 依赖 -->
    <dependency>
        <groupId>com.baomidou</groupId>
        <artifactId>mybatis-plus</artifactId>
        <version>2.3</version>
    </dependency>
    <!--junit -->
    <dependency>
        <groupId>junit</groupId>
        <artifactId>junit</artifactId>
        <version>4.9</version>
    </dependency>
    <!-- log4j -->
    <dependency>
        <groupId>log4j</groupId>
        <artifactId>log4j</artifactId>
        <version>1.2.17</version>
    </dependency>
    <!-- c3p0 -->
    <dependency>
        <groupId>com.mchange</groupId>
        <artifactId>c3p0</artifactId>
        <version>0.9.5.2</version>
    </dependency>
    <!-- mysql -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.37</version>
    </dependency>
    <!-- spring -->
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>4.3.10.RELEASE</version>
    </dependency>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-orm</artifactId>
        <version>4.3.10.RELEASE</version>
    </dependency>
```

**特别说明**: Mybatis 及 Mybatis-Spring 依赖请勿加入项目配置，以免引起版本冲突！！！Mybatis-Plus 会自动帮你维护！

#### (2) 加入 MyBatis 的全局配置文件

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
    PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-config.dtd">
<configuration>
    <!-- ... -->
</configuration>
```

#### (3) 加入 log4j.xml

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE log4j:configuration SYSTEM "log4j.dtd">
<log4j:configuration xmlns:log4j="http://jakarta.apache.org/log4j/">
    <appender name="STDOUT" class="org.apache.log4j.ConsoleAppender">
        <param name="Encoding" value="UTF-8"/>
        <layout class="org.apache.log4j.PatternLayout">
            <param name="ConversionPattern" value="%-5p %d{MM-dd
HH:mm:ss,SSS} %m (%F:%L) \n"/>
        </layout>
    </appender>
    <logger name="java.sql">
        <level value="debug"/>
    </logger>
    <logger name="org.apache.ibatis">
        <level value="info"/>
    </logger>
    <root>
        <level value="debug"/>
        <appender-ref ref="STDOUT"/>
    </root>
</log4j:configuration>
```

#### (4) 加入 db.properties 连接信息配置

```shell
jdbc.driver=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/mp
jdbc.username=root
jdbc.password=1234
```

#### (5) 加入 spring 的配置文件 applicationContext.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:tx="http://www.springframework.org/schema/tx"
       xmlns:mybatis-spring="http://mybatis.org/schema/mybatis-spring"
       xsi:schemaLocation="http://mybatis.org/schema/mybatis-spring
http://mybatis.org/schema/mybatis-spring-1.2.xsd
http://www.springframework.org/schema/beans
http://www.springframework.org/schema/beans/spring-beans.xsd
http://www.springframework.org/schema/context
http://www.springframework.org/schema/context/spring-context-4.0.xsd
http://www.springframework.org/schema/tx
http://www.springframework.org/schema/tx/spring-tx-4.0.xsd">
    <!-- 数据源 -->
    <context:property-placeholder location="classpath:db.properties"/>
    <bean id="dataSource"
          class="com.mchange.v2.c3p0.ComboPooledDataSource">
        <property name="driverClass" value="${jdbc.driver}"></property>
        <property name="jdbcUrl" value="${jdbc.url}"></property>
        <property name="user" value="${jdbc.username}"></property>
        <property name="password" value="${jdbc.password}"></property>
    </bean>
    <!-- 事务管理器 -->
    <bean id="dataSourceTransactionManager"
          class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
        <property name="dataSource" ref="dataSource"></property>
    </bean>
    <!-- 基于注解的事务管理 -->
    <tx:annotation-driven
            transaction-manager="dataSourceTransactionManager"/>
    <!-- 配置 SqlSessionFactoryBean -->
    <bean id="sqlSessionFactoryBean"
          class="org.mybatis.spring.SqlSessionFactoryBean">
        <!-- 数据源 -->
        <property name="dataSource" ref="dataSource"></property>
        <property name="configLocation"
                  value="classpath:mybatis-config.xml"></property>
        <!-- 别名处理 -->
        <property name="typeAliasesPackage"
                  value="com.atguigu.mp.beans"></property>
    </bean>
    <!--
    配置 mybatis 扫描 mapper 接口的路径
    -->
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage"
                  value="com.atguigu.mp.mapper"></property>
    </bean>
</beans>
```

### 2.4 测试

测试 Spring-Mybatis 的环境，保证 OK。

```Java
private ApplicationContext iocContext = new
    ClassPathXmlApplicationContext("applicationContext.xml");

@Test
public void testEnvironment() throws Exception{
    DataSource ds = iocContext.getBean("dataSource",DataSource.class);
    Connection conn = ds.getConnection();
    System.out.println(conn);
}
```

### 2.5 集成 MP

Mybatis-Plus 的集成非常简单，对于 Spring，我们仅仅需要把 Mybatis 自带的 MybatisSqlSessionFactoryBean 替换为 MP 自带的即可。

```xml
<bean id="sqlSessionFactoryBean"
      class="com.baomidou.mybatisplus.spring.MybatisSqlSessionFactoryBean">
    <!-- 数据源 -->
    <property name="dataSource" ref="dataSource"></property>
    <property name="configLocation"
              value="classpath:mybatis-config.xml"></property>
    <!-- 别名处理 -->
    <property name="typeAliasesPackage"
              value="com.atguigu.mp.beans"></property>
</bean>
```

## 第 3 章 入门 HelloWorld

## 第 4 章 条件构造器 EntityWrapper

## 第 5 章 ActiveRecord(活动记录)

## 第 6 章 代码生成器

## 第 7 章 插件扩展

## 第 8 章 自定义全局操作

## 第 9 章 公共字段自动填充

## 第 10 章 Oracle 主键 Sequence

## 第 11 章 Idea 快速开发插件

<a-back-top />

<reading-progress-bar/>
