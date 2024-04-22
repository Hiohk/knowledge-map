---
prev:
  text: "多线程"
  link: "/backend/java/java09"

next:
  text: "注解"
  link: "/backend/java/java11"
---

# 10. 反射机制

## 10.1 反射机制概述

反射机制是 JDK 中的一套类库，可以帮助我们操作或读取 class 字节码文件。

- `java.lang.Class`: Class 类型的实例代表硬盘上的某个 class 文件，或者说代表某一种类型。
- `java.lang.reflect.Field`: Field 类型的实例代表 class 文件中的成员变量。
- `java.lang.reflect.Method`: Method 类型的实例代表 class 文件中的方法。
- `java.lang.reflect.Constructor`: Constructor 类型的实例代表 class 文件中的构造方法。

## 10.2 获取 Class

获取 Class 的四种方式

1. 静态方法

`Class clazz = Class.forName("全限定类名");` 这个方法的执行会导致类的加载（初始化）。

```Java
Class stringClass = Class.forName("java.lang.String");
// 表示硬盘上的 String.class 文件
```

2. 实例方法

`Class clazz = 引用.getClass();` 这个方法通过引用调用。

```Java
String s1 = "abc";
Class stringClass2 = s1.getClass();
// 某种类型的字节码文件在内存中只有一份
// stringClass2 和 stringClass 都代表同一种类型 String 类型
System.out.println(stringClass2 == stringClass); // true
```

3. class 属性

`Class clazz = 类型名.class;`

```Java
Class intClass = int.class;
Class doubleClass = double.class;
Class stringClass = String.class;
Class booleanClass = boolean.class;
Class userClass = User.class;
```

4. 通过类加载器获取

`ClassLoader classLoader = ClassLoader.getSystemClassLoader();`

`Class clazz = classLoader.loadClass(“全限定类名”);`

5. Class.forName 和 classLoader.loadClass() 的区别？

- `Class.forName()`：类加载时会进行初始化。
- `classLoader.loadClass()`：类加载时不会进行初始化，直到第一次使用该类。

## 10.3 反射作用的体现

通过反射机制可以实例化对象。

```Java
// 资源绑定器
ResourceBundle bundle =
  ResourceBundle.getBundle("com.example.javatest09.classInfo");
// 通过key获取value
String className = bundle.getString("className");
try {
    // 通过反射机制实例化对象
    Class classObj = Class.forName(className);
    Object obj = classObj.newInstance();
    System.out.println(obj);
} catch (Exception e) {
    throw new RuntimeException(e);
}
```

## 10.4 反射 Field

### 反射 Field 的常用方法

**获取字段信息**

- `String getName()`: 返回字段的名称。
- `Class<?> getType()`: 返回字段的类型，即表示字段类型的 Class 对象。
- `Type getGenericType()`: 返回字段的泛型类型，如果字段不是泛型或不支持泛型，则返回与 getType() 相同的结果。
- `int getModifiers()`: 返回字段的修饰符集合，如 public, static, final 等，以整数形式表示。可以使用 Modifier 类的静态方法（如 Modifier.isPublic(int)）来判断修饰符。
- `boolean isSynthetic()`: 检查该字段是否由编译器或工具生成，而不是在源代码中直接声明。

**访问字段值**

- `Object get(Object obj)`: 从给定对象实例上获取该字段的值。对于非静态字段，需要传入对象实例；对于静态字段，可以传入 null 或一个实例对象。
- `void set(Object obj, Object value)`: 设置给定对象实例上该字段的值。同样，对于非静态字段需传入对象实例，静态字段可以传入 null 或任意实例。

**安全性与访问控制**

- `boolean isAccessible()`: 检查当前 Field 是否可访问。默认情况下，私有字段可能不可访问，除非通过 setAccessible(true) 显式设置。
- `void setAccessible(boolean accessible)`: 设置该 Field 是否允许访问。将 accessible 设置为 true 可以绕过 Java 访问控制检查，通常在需要访问私有或受保护字段时使用。

**注解相关**

- `<T extends Annotation> T getAnnotation(Class<T> annotationClass)`: 获取该字段上指定类型的注解实例。
- `Annotation[] getAnnotations()`: 返回该字段上所有注解组成的数组。
- `boolean isAnnotationPresent(Class<? extends Annotation> annotationClass)`: 判断该字段是否包含指定类型的注解。

**其他**

- `Class<?> getDeclaringClass()`: 返回声明该字段的类。
- `String toString()`: 返回表示该 Field 的字符串，通常包含其完全限定名以及修饰符等信息。

这些方法构成了 java.lang.reflect.Field 类的核心功能集，用于在运行时通过反射机制动态地获取和操作类的字段信息及值。使用时需要注意，反射操作可能会违反封装原则，应谨慎使用并在必要时确保其与应用程序的安全性和性能要求相兼容。
::: code-group

```Java [ReflectTest02.class]
public class ReflectTest02 {
    public static void main(String[] args) throws ClassNotFoundException {
        Class vipClass = Class.forName("com.example.javatest09.Vip");
        // 获取Vip类中所有 public 修饰的属性或字段
        Field[] fields = vipClass.getFields();
        System.out.println(fields.length);
        for (Field field : fields) {
            System.out.println(field.getName());
        }

        System.out.println("-----------------------");
        // 获取Vip类中所有的属性或字段，包括private修饰的
        Field[] fields2 = vipClass.getDeclaredFields();
        for (Field field : fields2) {
            Class fieldType = field.getType();
            // 获取类中的属性名称和对应的类型
            System.out.println(field.getName()+"----"+fieldType.getSimpleName());
        }
    }
}
```

```Java [Vip.class]
public class Vip {
    public String name;
    private int age;
    protected String birth;
    boolean gender;
    public static String address = "beijing";
    public static final String GRADE = "gold";

}
```

:::

### 通过反射为对象属性赋值 :white_check_mark:

```Java
Customer customer = new Customer();
// 获取类
Class clazz = Class.forName("com.example.javatest09.Customer");
// 获取对应的Field
Field nameField = clazz.getDeclaredField("name");

nameField.setAccessible(true);
// 修改属性的值
nameField.set(customer,"Tom");
// 读取属性的值
System.out.println(nameField.get(customer));
```

## 10.5 反射 Method

**获取方法信息**

- `getName()`: 返回此方法的名称。
- `getReturnType()`: 获取此方法返回值的 Class 对象。
- `getParameterTypes()`: 返回一个 Class 对象数组，这些对象表示此方法的参数类型。
- `getModifiers()`: 返回此方法的 Java 语言修饰符。
- `getDeclaringClass()`: 返回表示声明此 Method 的类或接口的 Class 对象。

**调用方法**

- `invoke(Object obj, Object... args)`: 对带有指定参数的指定对象调用此 Method 对象所表示的方法。

**其他方法**

- `isAccessible()`: 检查此方法是否可以通过此 Method 对象访问。
- `setAccessible(boolean flag)`: 设置此方法的可访问性。

```Java
Class clazz = Class.forName("com.example.javatest09.UserService");
Method[] methods = clazz.getDeclaredMethods();
for (Method method : methods) {
    // 方法修饰符
    System.out.println(Modifier.toString(method.getModifiers()));
    // 方法返回值类型
    System.out.println(method.getReturnType().getName());
    // 方法名
    System.out.println(method.getName());
    // 方法的参数列表
    Class<?>[] parameterTypes = method.getParameterTypes();
    for (Class parameterType : parameterTypes) {
        System.out.println(parameterType.getName());
    }
}
```

## 10.6 反射 Constructor

## 10.7 模拟框架的部分实现

## 10.8 类加载及双亲委派机制

### 类加载器

1. 虚拟机内部提供了三种类加载器（Java9+）：

- 启动类加载器（BootstrapClassLoader）：加载 Java 最核心的类，例如 String
- 平台类加载器（PlatformClassLoader）：加载 Java 平台扩展的类库，例如解析 XML 的
- 应用类加载器（AppClassLoader）：加载 classpath 中的
- 同时我们还可以自定义一个类加载器（UserClassLoader）

2. 获取类加载器可以通过 getParent()方法一级一级获取

### 双亲委派机制

1. 某个类加载器接收到加载类的任务时，通常委托给“父 类加载”完成加载。
2. 最“父 类加载器”无法加载时，一级一级向下委托加载任务。
3. 作用：

- 保护程序的安全。
- 防止类加载重复。

## 10.9 反射泛型

<a-back-top />
