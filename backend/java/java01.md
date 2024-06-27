---
next:
  text: "Java 基础语法"
  link: "/backend/java/java02"
---

# Java

**符号说明**

- :white_check_mark: 需要学习者**掌握**的知识点；
- :heart: 高级开发者需要**重点掌握**的知识点；
- :rocket: 需要学习者**理解**的知识点；
- :star: 需要学习者**了解**的知识点；
- :x: 拓展知识点，可以不用学习；

# 1. 先导知识

## 1.1 常用的 windows 组合键 :star:

- win + D：回到桌面
- win + E：打开资源管理器
- win + R：打开运行窗口
- win + L：锁屏
- alt + tab：应用之间的切换

## 1.2 常用的 DOS 命令 :star:

### 打开 DOS 命令窗口

    win + R，输入 cmd，cmd 是 command 单词的缩写。

### 常用 DOS 命令：

- dir：列出当前路径下所有的文件以及目录。
- cls：clear screen 清屏。
- exit：退出 DOS 命令窗口。
- 切换盘符：c: 或者 d: 或者 e:
- del：删除一个文件或者多个文件。del Test.java del \*.java
- ipconfig 以及 ipconfig /all：查看网卡的相关信息，例如 ip 地址，mac 地址等。
  - ping 命令：查看两台计算机之间是否可以正常通信
  - ping 192.168.137.101
  - ping 192.168.137.101 -t
  - ping www.baidu.com
  - ping www.baidu.com -t
- 终止 DOS 命令窗口中某个命令的执行：ctrl + c
- mkdir：创建目录
- mkdir abc，表示在当前目录下新建一个目录：abc
- rd：删除目录
- rd abc，表示删除当前路径下的 abc 目录
- ren：重命名
- ren abc xyz，表示将当前路径下的 abc 目录名修改为 xyz
- cd 命令：
  - 作用是：切换目录。change directory
  - cd 命令的用法：cd 路径
  - 路径包括：
  - 相对路径：相对路径一定是相对于当前路径而言的，以当前路径为基准，从当前所在的位置开始找。
  - 绝对路径：在 windows 当中，路径开始的时候，是以盘符开始的，都是绝对路径。例如：C:\Users\Administrator\xyz\abc\def
  - cd .. 回到上级目录 （在 windows 系统中两个点.. 代表的是一个上级目录。扩展：其实还有一个路径叫做一个点 . 一个点代表的是当前路径。）
  - cd / 回到跟目录
  - 注意：路径在 windows 当中自动补全：使用 tab 键。
- 定时关机：
  shutdown -s -t 3600 一小时之后自动关机。
- 批处理文件
  my.bat 文件

```
cd C:\Users\Administrator\xyz\abc\def
c:
del *.java
```

作用：切换到 C:\Users\Administrator\xyz\abc\def 目录下，删除这个目录中所有的 java 文件。

### 通用的文本编辑快捷键

- ctrl+c 复制
- ctrl+v 粘贴
- ctrl+x 剪切
- ctrl+s 保存
- ctrl+z 撤销
- ctrl+y 重做
- ctrl+a 全选
- home 光标回到行首
- end 光标回到行尾
- ctrl + home 光标回到文章开始
- ctrl + end 光标回到文章末尾
- shift + home 或 end 选中一行
- 鼠标双击 （选中一个单词）
- ctrl + shift + 右箭头或左箭头 （选中一个单词）
- ctrl + f 查找

### java 中的注释

单行注释：

```
// 单行注释
// 单行注释
// 单行注释
// 单行注释
```

多行注释：

```
/*
	多行注释
	多行注释
*/
```

文档注释：

```
/**
* javadoc 注释，可以给 javadoc 命令解析提取并生成帮助文档
* @author dujubin
* @version 1.0
* @since 1.0
*/
```

使用以下命令可以提取生成帮助文档：

```
javadoc -d docs -author -version -encoding utf-8 HelloWorld.java
```

<gitalk />

<a-back-top />

<reading-progress-bar/>
