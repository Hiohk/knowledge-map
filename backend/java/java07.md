---
prev:
  text: "常用类"
  link: "/backend/java/java06"

next:
  text: "IO 流"
  link: "/backend/java/java08"
---

# 7. 集合框架

## 7.1 集合概述

01. 什么是集合，有什么用？

* 集合是一种容器，用来组织和管理数据的。非常重要。
* Java 的集合框架对应的这套类库其实就是对各种数据结构的实现。
* 每一个集合类底层采用的数据结构不同，例如 ArrayList 集合底层采用了数组，LinkedList 集合底层采用了双向链表，HashMap 集合底层采用了哈希表，TreeMap 集合底层采用了红黑树。
* 我们不用写数据结构的实现了。直接用就行了。但我们需要知道的是在哪种场合下选择哪一个集合效率是最高的。

02. 集合中存储的是引用，不是把堆中的对象存储到集合中，是把对象的地址存储到集合中。
03. 默认情况下，如果不使用泛型的话，集合中可以存储任何类型的引用，只要是 Object 的子类都可以存储。
04. Java 集合框架相关的类都在 java.util 包下。
05. Java 集合框架分为两部分：

* Collection 结构：元素以单个形式存储。
* Map 结构：元素以键值对的映射关系存储。

## 7.2 Collection 继承结构

01. SequencedCollection 和 SequencedSet 接口都是 Java21 新增的接口。
02. 右图中蓝色的是实现类。其它的都是接口。
03. 6 个实现类中只有 HashSet 是无序集合。剩下的都是有序集合。

* 有序集合：集合中存储的元素有下标或者集合中存储的元素是可排序的。
* 无序集合：集合中存储的元素没有下标并且集合中存储的元素也没有排序。

04. 每个集合实现类对应的数据结构如下：

* LinkedList: 双向链表（不是队列数据结构，但使用它可以模拟队列）
* ArrayList：数组
* Vector：数组（线程安全的）
* HashSet：哈希表
* LinkedHashSet：双向链表和哈希表结合体
* TreeSet：红黑树

05. List 集合中存储的元素可重复。Set 集合中存储的元素不可重复。

![alt text](image-12.png)

## 7.3 Collection 接口

### Collection 接口的通用方法

* `boolean add(E e)`: 向集合中添加元素
* `int size()`: 获取集合中元素个数
* `boolean addAll(Collection c)`: 将参数集合中所有元素全部加入当前集合
* `boolean contains(Object o)`: 判断集合中是否包含对象 o
* `boolean remove(Object o)`: 从集合中删除对象 o
* `void clear()`: 清空集合
* `boolean isEmpty()`: 判断集合中元素个数是否为 0
* `Object[] toArray()`: 将集合转换成一维数组

### Collection 的遍历（集合的通用遍历方式）

01. 第一步：获取当前集合依赖的迭代器对象
   Iterator it = collection.iterator(); 
02. 第二步：编写循环，循环条件是：当前光标指向的位置是否存在元素。
   while(it.hasNext()){}
03. 第三步：如果有，将光标指向的当前元素返回，并且将光标向下移动一位。
   Object obj = it.next(); 

## 7.4 SequencedCollection 接口

所有的有序集合都实现了 SequencedCollection 接口:

01. SequencedCollection 接口是 Java21 版本新增的。

02. SequencedCollection 接口中的方法：

* `void addFirst(Object o)`：向头部添加
* `void addLast(Object o)`：向末尾添加
* `Object removeFirst()`：删除头部
* `Object removeLast()`：删除末尾
* `Object getFirst()`：获取头部节点
* `Object getLast()`：获取末尾节点
* `SequencedCollection reversed()`: 反转集合中的元素

03. ArrayList，LinkedList，Vector，LinkedHashSet，TreeSet,Stack 都可以调用这个接口中的方法。

## 7.5 泛型

### 泛型简介

01. 泛型是 Java5 的新特性，属于编译阶段的功能。
02. 泛型可以让开发者在编写代码时指定集合中存储的数据类型
03. 泛型作用：

* 类型安全：指定了集合中元素的类型之后，编译器会在编译时进行类型检查，如果尝试将错误类型的元素添加到集合中，就会在编译时报错，避免了在运行时出现类型错误的问题。
* 代码简洁：使用泛型可以简化代码，避免了繁琐的类型转换操作。比如，在没有泛型的时候，需要使用 Object 类型来保存集合中的元素，并在使用时强制类型转换成实际类型，而有了泛型之后，只需要在定义集合时指定类型即可。

04. 在集合中使用泛型

```java
Collection<String> strs = new ArrayList<String>();
```

这就表示该集合只能存储字符串，存储其它类型时编译器报错。
并且以上代码使用泛型后，避免了繁琐的类型转换，集合中的元素可以直接调用 String 类特有的方法。 5. Java7 的新特性：钻石表达式

```java
Collection<String> strs = new ArrayList<>();
```

### 泛型的擦除与补偿（了解）

01. 泛型的出现提高了编译时的安全性，正因为编译时对添加的数据做了检查，则程序运行时才不会抛出类型转换异常。因此泛型本质上是编译时期的技术，是专门给编译器用的。加载类的时候，会将泛型擦除掉（擦除之后的类型为 Object 类型），这个称为泛型擦除。
02. 为什么要有泛型擦除呢？其本质是为了让 JDK1.4 和 JDK1.5 能够兼容同一个类加载器。在 JDK1.5 版本中，程序编译时期会对集合添加的元素进行安全检查，如果检查完是安全的、没有错误的，那么就意味着添加的元素都属于同一种数据类型，则加载类时就可以把这个泛型擦除掉，将泛型擦除后的类型就是 Object 类，这样擦除之后的代码就与 JDK1.4 的代码一致。
03. 由于加载类的时候，会默认将类中的泛型擦除为 Object 类型，所以添加的元素就被转化为 Object 类型，同时取出的元素也默认为 Object 类型。而我们获得集合中的元素时，按理说取出的元素应该是 Object 类型，为什么取出的元素却是实际添加的元素类型呢？
04. 这里又做了一个默认的操作，我们称之为泛型的补偿。在程序运行时，通过获取元素的实际类型进行强转，这就叫做泛型补偿（不必手动实现强制转换）。获得集合中的元素时，虚拟机会根据获得元素的实际类型进行向下转型，也就是会恢复获得元素的实际类型，因此我们就无需手动执行向下转型操作，从本质上避免了抛出类型转换异常。

### 泛型的使用

01. 在类上定义泛型
   语法：class 类名<泛型 1, 泛型 2, 泛型 3...>{}

02. 在静态方法上定义泛型
   在类上定义的泛型，在静态方法中无法使用。如果在静态方法中使用泛型，则需要再方法返回值类型前面进行泛型的声明。
   语法格式：<泛型 1, 泛型 2, 泛型 3, ...> 返回值类型 方法名(形参列表) {}

03. 在接口上定义泛型
   语法格式：interface 接口名<泛型 1, 泛型 2, ...> {}

例如： `public interface Flayable<T>{}`

实现接口时，如果知道具体的类型，则：

```java
public class MyClass implements Flyable<Bird>{}
```

实现接口时，如果不知道具体的类型，则：

```java
public class MyClass<T> implements Flyable<T>{}
```

### 泛型通配符

泛型是在限定数据类型，当在集合或者其他地方使用到泛型后，那么这时一旦明确泛型的数据类型，那么在使用的时候只能给其传递和数据类型匹配的类型，否则就会报错。

有的情况下，我们在定义方法时，根本无法确定集合中存储元素的类型是什么。为了解决这个“无法确定集合中存储元素类型”问题，那么 Java 语言就提供了泛型的通配符。

通配符的几种形式：

01. 无限定通配符，<?>，此处“？”可以为任意引用数据类型。
02. 上限通配符，<? extends Number>，此处“？”必须为 Number 及其子类。
03. 下限通配符，<? super Number>，此处“？”必须为 Number 及其父类。

## 7.6 迭代时删除元素

01. 迭代集合时删除元素

使用“集合对象.remove(元素)”：会出现 ConcurrentModificationException 异常。
使用“迭代器对象.remove()”：不会出现异常。

02. 关于集合的并发修改问题

想象一下，有两个线程：A 和 B。A 线程负责迭代遍历集合，B 线程负责删除集合中的某个元素。当这两个线程同时执行时会有什么问题？

03. 如何解决并发修改问题：fail-fast 机制

* fail-fast 机制又被称为：快速失败机制。也就是说只要程序发现了程序对集合进行了并发修改。就会立即让其失败，以防出现错误。

04. fail-fast 机制是如何实现的？以下是源码中的实现原理：

* 集合中设置了一个 modCount 属性，用来记录修改次数，使用集合对象执行增，删，改中任意一个操作时，modCount 就会自动加 1。
  获取迭代器对象的时候，会给迭代器对象初始化一个 expectedModCount 属性。并且将 expectedModCount 初始化为 modCount，即：int expectedModCount = modCount; 
* 当使用集合对象删除元素时：modCount 会加 1。但是迭代器中的 expectedModCount 不会加 1。而当迭代器对象的 next()方法执行时，会检测 expectedModCount 和 modCount 是否相等，如果不相等，则抛出：ConcurrentModificationException 异常。
* 当使用迭代器删除元素的时候：modCount 会加 1，并且 expectedModCount 也会加 1。这样当迭代器对象的 next()方法执行时，检测到的 expectedModCount 和 modCount 相等，则不会出现 ConcurrentModificationException 异常。

05. 注意：虽然我们当前写的程序是单线程的程序，并没有使用多线程，但是通过迭代器去遍历的同时使用集合去删除元素，这个行为将被认定为并发修改。

06. 结论：迭代集合时，删除元素要使用“迭代器对象.remove()”方法来删除，避免使用“集合对象.remove(元素)”。主要是为了避免 ConcurrentModificationException 异常的发生。注意：迭代器的 remove()方法删除的是 next()方法的返回的那个数据。remove()方法调用之前一定是先调用了 next() 方法，如果不是这样的，就会报错。

## 7.7 List 接口

### List 接口常用方法

01. List 集合存储元素特点：有序可重复。

* 有序：是因为 List 集合中的元素都是有下标的，从 0 开始，以 1 递增。
* 可重复：存进去 1，还可以再存一个 1。

02. List 接口下常见的实现类：

* `ArrayList`：数组
* `Vector`、`Stack`：数组（线程安全的）
* `LinkedList`：双向链表

03. List 接口特有方法：（在 Collection 和 SequencedCollection 中没有的方法，只适合 List 家族使用的方法，这些方法都和下标有关系。）

* `void add​(int index, E element)` 在指定索引处插入元素
* `E set​(int index, E element)` 修改索引处的元素
* `E get​(int index)` 根据索引获取元素（通过这个方法 List 集合具有自己特殊的遍历方式：根据下标遍历）
* `E remove​(int index)` 删除索引处的元素
* `int indexOf​(Object o)` 获取对象 o 在当前集合中第一次出现时的索引。
* `int lastIndexOf​(Object o)` 获取对象 o 在当前集合中最后一次出现时的索引。
* `List<E> subList​(int fromIndex, int toIndex)` 截取子 List 集合生成一个新集合（对原集合无影响）。[fromIndex, toIndex)
* `static List<E> of​(E... elements)` 静态方法，返回包含任意数量元素的不可修改列表。（获取的集合是只读的，不可修改的。）

### List 接口特有迭代

01. 特有的迭代方式

* `ListIterator<E> listIterator()` 获取 List 集合特有的迭代器（该迭代器功能更加强大，但只适合于 List 集合使用）
* `ListIterator<E> listIterator(int index)` 从列表中的指定位置开始，返回列表中元素的列表迭代器

02. ListIterator 接口中的常用方法：

* `boolean hasNext()` 判断光标当前指向的位置是否存在元素。
* `E next()` 将当前光标指向的元素返回，然后将光标向下移动一位。
* `void remove()` 删除上一次 next()方法返回的那个数据(删除的是集合中的)。remove()方法调用的前提是：你先调用 next()方法。不然会报错。
* `void add​(E e)` 添加元素（将元素添加到光标指向的位置，然后光标向下移动一位。）
* `boolean hasPrevious()` 判断当前光标指向位置的上一个位置是否存在元素。
* `E previous()` 获取上一个元素（将光标向上移动一位，然后将光标指向的元素返回）
* `int nextIndex()` 获取光标指向的那个位置的下标
* `int previousIndex()` 获取光标指向的那个位置的上一个位置的下标
* `void set​(E e)` 修改的是上一次 next()方法返回的那个数据（修改的是集合中的）。set()方法调用的前提是：你先调用了 next()方法。不然会报错。

### List 接口使用 Comparator 排序

01. 回顾数组中自定义类型是如何排序的？

* 所有自定义类型排序时必须指定排序规则。（int 不需要指定，String 不需要指定，因为他们都有固定的排序规则。int 按照数字大小。String 按照字典中的顺序）
* 如何给自定义类型指定排序规则？让自定义类型实现 java.lang. Comparable 接口，然后重写 compareTo 方法，在该方法中指定比较规则。

02. List 集合的排序

* `default void sort​(Comparator<? super E> c)`; 对 List 集合中元素排序可以调用此方法。
* sort 方法需要一个参数: java.util. Comparator。我们把这个参数叫做比较器。这是一个接口。
* 如何给自定义类型指定比较规则？可以对 Comparator 提供一个实现类，并重写 compare 方法来指定比较规则。
* 当然，Comparator 接口的实现类也可以采用匿名内部类的方式。

## 7.8 ArrayList

01. ArrayList 集合底层采用了数组这种数据结构。
02. ArrayList 集合优点：
   底层是数组，因此根据下标查找元素的时间复杂度是 O(1)。因此检索效率高。
03. ArrayList 集合缺点：
   随机增删元素效率较低。不过只要数组的容量还没满，对末尾元素进行增删，效率不受影响。
04. ArrayList 集合适用场景：
   需要频繁的检索元素，并且很少的进行随机增删元素时建议使用。
05. ArrayList 默认初始化容量？
   从源码角度可以看到，当调用无参数构造方法时，初始化容量 0，当第一次调用 add 方法时将 ArrayList 容量初始化为 10 个长度。
06. ArrayList 集合扩容策略？
   底层扩容会创建一个新的数组，然后使用数组拷贝。扩容之后的新容量是原容量的 1.5 倍。
07. ArrayList 集合源码分析：

* 属性分析
* 构造方法分析（使用 ArrayList 集合时最好也是预测大概数量，给定初始化容量，减少扩容次数。）
* 添加元素
* 修改元素
* 插入元素
* 删除元素

## 7.9 Vector

01. Vector 底层也是数组，和 ArrayList 相同。
02. 不同的是 Vector 几乎所有的方法都是线程同步的（被 synchronized 修饰：线程排队执行，不能并发），因此 Vector 是线程安全的，但由于效率较低，很少使用。因为控制线程安全有新方式。
03. Vector 初始化容量：10
04. Vector 扩容策略：扩容之后的容量是原容量的 2 倍。

## 7.10 链表存储结构

01. 链表分类

* 单向链表
* 双向链表
* 环形链表
  + 环形单链表
  + 环形双链表

02. 链表优点：
   因为链表节点在空间存储上，内存地址不是连续的。因此删除某个节点时不需要涉及到元素位移的问题。因此随机增删元素效率较高。时间复杂度 O(1)
03. 链表缺点：
   链表中元素在查找时，只能从某个节点开始顺序查找，因为链表节点的内存地址在空间上不是连续的。链表查找元素效率较低，时间复杂度 O(n)
04. 链表的适用场景：
   需要频繁进行随机增删，但很少的查找的操作时。

## 7.11 LinkedList

01. LinkedList 是一个双向链表
02. 源码分析：

* 属性分析
* 构造方法分析
* 添加元素
* 修改元素
* 插入元素
* 删除元素

03. 手写单向链表

## 7.12 栈数据结构

01. LIFO 原则（Last In，First Out）：后进先出
02. 实现栈数据结构，可以用数组来实现，也可以用双向链表来实现。
03. 用数组实现的代表是：Stack、ArrayDeque

* Stack：Vetor 的子类，实现了栈数据结构，除了具有 Vetor 的方法，还扩展了其它方法，完成了栈结构的模拟。不过在 JDK1.6（Java6）之后就不建议使用了，因为它是线程安全的，太慢了。Stack 中的方法如下：
  + E push(E item)：压栈
  + E pop()：弹栈（将栈顶元素删除，并返回被删除的引用）
  + int search(Object o)：查找栈中元素（返回值的意思是：以 1 为开始，从栈顶往下数第几个）
  + E peek()：窥视栈顶元素（不会将栈顶元素删除，只是看看栈顶元素是什么。注意：如果栈为空时会报异常。）
* ArrayDeque
  + E push(E item)
  + E pop()
* 用链表实现的代表是：LinkedList
  + E push(E item)
  + E pop()

## 7.13 队列数据结构

01. 队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，队列是一种操作受限制的线性表。进行插入操作（入口）的端称为队尾，进行删除操作（出口）的端称为队头。
02. 队列的插入操作只能在队尾操作，队列的删除操作只能在队头操作，因此队列是一种先进先出（First In First Out）的线性表，简称 FIFO 表。
03. Queue 接口是一种基于 FIFO（先进先出）的数据结构，而 Deque 接口则同时支持 FIFO 和 LIFO（后进先出）两种操作。因此 Deque 接口也被称为“双端队列”。
04. Java 集合框架中队列的实现：

* 链表实现方式：LinkedList
* 数组实现方式：ArrayDeque

05. LinkedList 和 ArrayDeque 都实现了 Queue、Deque 接口，因此这两个类都具备队列和双端队列的特性。
06. LinkedList 底层是基于双向链表实现的，因此它天然就是一个双端队列，既支持从队尾入队，从队头出队，也支持从队头入队，从队尾出队。用 Deque 的实现方式来说，就是它既实现了队列的 offer()和 poll()方法，也实现了双端队列的 offerFirst()、offerLast()、pollFirst()和 pollLast()方法等。
07. ArrayDeque 底层是使用环形数组实现的，也是一个双端队列。它比 LinkedList 更加高效，因为在数组中随机访问元素的时间复杂度是 O(1)，而链表中需要从头或尾部遍历链表寻找元素，时间复杂度是 O(N)。循环数组：index = (start + i) % capacity

08. Queue 接口基于 Collection 扩展的方法包括：

* boolean offer(E e); 入队。
* E poll(); 出队，如果队列为空，返回 null。
* E remove(); 出队，如果队列为空，抛异常。
* E peek(); 查看队头元素，如果为空则返回 null。
* E element(); 查看对头元素，如果为空则抛异常。

09. Deque 接口基于 Queen 接口扩展的方法包括：

以下 2 个方法可模拟队列：

* boolean offerLast(E e); 从队尾入队
* E pollFirst(); 从队头出队

以下 4 个方法可模拟双端队列：

* boolean offerLast(E e); 从队尾入队
* E pollFirst(); 从队头出队
* boolean offerFirst(E e); 从队头入队
* E pollLast(); 从队尾出队

另外 offerLast+pollLast 或者 pollFirst+offerFirst 可以模拟栈数据结构。或者也可以直接调用 push/pop 方法。

## 7.14 Map 继承结构

01. Map 集合以 key 和 value 的键值对形式存储。key 和 value 存储的都是引用。
02. Map 集合中 key 起主导作用。value 是附属在 key 上的。
03. SequencedMap 是 Java21 新增的。
04. LinkedHashMap 和 TreeMap 都是有序集合。（key 是有序的）
05. HashMap，Hashtable，Properties 都是无序集合。（key 是无序的）
06. Map 集合的 key 都是不可重复的。key 重复的话，value 会覆盖。
07. HashSet 集合底层是 new 了一个 HashMap。往 HashSet 集合中存储元素实际上是将元素存储到 HashMap 集合的 key 部分。HashMap 集合的 key 是无序不可重复的，因此 HashSet 集合就是无序不可重复的。HashMap 集合底层是哈希表/散列表数据结构，因此 HashSet 底层也是哈希表/散列表。
08. TreeSet 集合底层是 new 了一个 TreeMap。往 TreeSet 集合中存储元素实际上是将元素存储到 TreeMap 集合的 key 部分。TreeMap 集合的 key 是不可重复但可排序的，因此 TreeSet 集合就是不可重复但可排序的。TreeMap 集合底层是红黑树，因此 TreeSet 底层也是红黑树。它们的排序通过 java.lang.Comparable 和 java.util.Comparator 均可实现。
09. LinkedHashSet 集合底层是 new 了一个 LinkedHashMap。LinkedHashMap 集合只是为了保证元素的插入顺序，效率比 HashSet 低，底层采用的哈希表+双向链表实现。
10. 根据源码可以看到向 Set 集合中 add 时，底层会向 Map 中 put。value 只是一个固定不变的常量，只是起到一个占位符的作用。主要是 key。

## 7.15 Map 接口常用方法

* `V put(K key, V value)`; 添加键值对
* `void putAll(Map<? extends K,? extends V> m)`; 添加多个键值对
* `V get(Object key)`; 通过 key 获取 value
* `boolean containsKey(Object key)`; 是否包含某个 key
* `boolean containsValue(Object value)`; 是否包含某个 value
* `V remove(Object key)`; 通过 key 删除 key-value
* `void clear()`; 清空 Map
* `int size()`; 键值对个数
* `boolean isEmpty()`; 判断是否为空 Map
* `Collection<V> values()`; 获取所有的 value
* `Set<K> keySet()`; 获取所有的 key
* `Set<Map.Entry<K,V>> entrySet()`; 获取所有键值对的 Set 视图。
* `static <K,V> Map<K,V> of(K k1, V v1, K k2, V v2, K k3, V v3)`; 静态方法，使用现有的 key-value 构造 Map

## 7.16 HashMap

### HashMap 简介

01. HashMap 集合的 key 是无序不可重复的。

* 无序：插入顺序和取出顺序不一定相同。
* 不可重复：key 具有唯一性。

02. 向 HashMap 集合中 put 时，key 如果重复的话，value 会覆盖。
03. HashMap 集合的 key 具有唯一性，向 key 部分插入自定义的类型会怎样？如果自定义的类型重写 equals 之后会怎样？？？
04. HashMap 底层的数据结构是：哈希表/散列表

* 哈希表是一种查询和增删效率都很高的一种数据结构，非常重要，在很多场合使用，并且面试也很常见。必须掌握。
* 哈希表如何做到的查询和增删效率都好的呢，因为哈希表是“数组 + 链表”的结合体。数组和链表的结合不是绝对的。
* 哈希表可能是：数组 + 链表，数组 + 红黑树， 数组 + 链表 + 红黑树等。

05. HashMap 集合底层部分源码：

### 哈希表存储原理

01. 哈希表：一种数据结构的名字。
02. 哈希函数：

* 通过哈希函数可以将一个 Java 对象映射为一个数字。（就像现实世界中，每个人（对象）都会映射一个身份证号（哈希值）一样。）
* 也就是说通过哈希函数的执行可以得到一个哈希值。
* 在 Java 中，hashCode()方法就是哈希函数。
* 也就是说 hashCode()方法的返回值就是哈希值。
* 一个好的哈希函数，可以让散列分布均匀。

03. 哈希值：也叫做哈希码。是哈希函数执行的结果。
04. 哈希碰撞：也叫做哈希冲突。

* 当两个对象“哈希值%数组长度”之后得到的下标相同时，就发生了哈希冲突。
* 如何解决哈希冲突？将冲突的挂到同一个链表上或同一个红黑树上。

05. 以上描述凡是“哈希”都可以换为“散列”。

重点：

* 存放在 HashMap 集合 key 部分的元素必须同时重写 hashCode+equals 方法。
* equals 返回 true 时，hashCode 必须相同。

### 手写 HashMap 的 put 方法

**第一步**：处理 key 为 null 的情况

如果添加键值对的 key 就是 null，则将该键值对存储到 table 数组索引为 0 的位置。

**第二步**：获得 key 对象的哈希值

如果添加键值对的 key 不是 null，则就调用 key 的 hashcode()方法，获得 key 的哈希值。

**第三步**：获得键值对的存储位置

因为获得的哈希值在数组合法索引范围之外，因此我们就需要将获得的哈希值转化为[0，数组长度-1]范围的整数，
那么可以通过取模法来实现，也就是通过“哈希值 % 数组长度”来获得索引位置（i）。

**第四步**：将键值对添加到 table 数组中

当 table[i]返回结果为 null 时，则键键值对封装为 Node 对象并存入到 table[i]的位置。
当 table[i]返回结果不为 null 时，则意味着 table[i]存储的是单链表。我们首先遍历单链表，如果遍历出来节点的
key 和添加键值对的 key 相同，那么就执行覆盖操作；如果遍历出来节点的 key 和添加键值对的 key 都不同，则就将键键
值对封装为 Node 对象并插入到单链表末尾。

### 手写 HashMap 的 get 方法

**第一步**：处理 key 为 null 的情况

如果查询的 key 就是 null，则就在 table 数组索引为 0 的位置去查询。

**第二步**：获得 key 对象的哈希值

如果查询的 key 不是 null，则就调用 key 的 hashcode()方法，获得 key 的哈希值。

**第三步**：获得键值对的存储位置

因为获得的哈希值在数组合法索引范围之外，因此我们就需要将获得的哈希值转化为[0，数组长度-1]范围的整数，
那么可以通过取模法来实现，也就是通过“哈希值 % 数组长度”来获得索引位置（i）。

**第四步**：遍历单链表，根据 key 获得 value 值

如果 table[i]返回的结果为 null，则证明单链表不存在，那么返回 null 即可
如果 table[i]返回的结果不为 null 时，则证明单链表存在，那么就遍历整个单链表。如果遍历出来节点的 key 和查询
的 key 相同，那么就返回遍历出来节点的 value 值；如果整个单链表遍历完毕，则遍历出来节点的 key 和查询的 key 都不
相等，那么就证明查询 key 在链表中不存在，则直接返回 null 即可。

### HashMap 在 Java8 后的改进（包含 Java8）

01. 初始化时机：

* Java8 之前，构造方法执行时初始化 table 数组。
* Java8 之后，第一次调用 put 方法时初始化 table 数组。

02. 插入法：

* Java8 之前，头插法
* Java8 之后，尾插法

03. 数据结构：

* Java8 之前：数组 + 单向链表
* Java8 之后：数组 + 单向链表 + 红黑树。
* 最开始使用单向链表解决哈希冲突。如果结点数量 >= 8，并且 table 的长度 >= 64。单向链表转换为红黑树。
* 当删除红黑树上的结点时，结点数量 <= 6 时。红黑树转换为单向链表。

### HashMap 初始化容量永远都是 2 的次幂

01. HashMap 集合初始化容量 16（第一次调用 put 方法时初始化）
02. HashMap 集合的容量永远都是 2 的次幂，假如给定初始化容量为 31，它底层也会变成 32 的容量。
03. 将容量设置为 2 的次幂作用是：加快哈希计算，减少哈希冲突。
04. 为什么会加快哈希计算？

* 首先你要知道，使用二进制运算是最快的。
* 当一个数字是 2 的次幂时，例如数组的长度是 2 的次幂：hash & (length-1) 的结果和 hash % length 的结果相同。

注意：只有是 2 的次幂时，以上等式才会成立。因为了使用 & 运算符，让效率提升，因此建议容量一直是 2 的次幂。 5. 为什么会减少哈希冲突？

* 底层运算是：hash & length - 1
* 如果 length 是偶数：length-1 后一定是奇数，奇数二进制位最后一位一定是 1, 1 和其他二进制位进行与运算，结果可能是 1，也可能是 0，这样可以减少哈希冲突，让散列分布更加均匀。
* 如果 length 是奇数：length-1 后一定是偶数，偶数二进制位最后一位一定是 0, 0 和任何数进行与运算，结果一定是 0，这样就会导致发生大量的哈希冲突，白白浪费了一半的空间。

### 关于 HashMap 的初始化容量的设置

01. 当哈希表中的元素越来越多的时候，散列碰撞的几率也就越来越高（因为数组的长度是固定的），从而导致单链表过长，降低了哈希表的性能，此时我们就需要对哈希表进行扩容操作。
02. 那么 HashMap 什么时候进行扩容呢？当执行 put()操作的时候，如果 HashMap 中存储元素的个数超过“数组长度\* loadFactor”的结果（loadFactor 指的是负载因子，loadFactor 的默认值一般为 0.75），那么就需要执行数组扩容操作。
03. 所谓的扩容操作，就是把数组的空间大小扩大一倍，然后遍历哈希表中元素，把这些元素重新均匀分散到扩容后的哈希表中。例如，默认情况下，数组大小为 16，那么当 HashMap 中元素个数超过 16*0.75=12 的时候，就需要执行扩容操作，把数组的大小扩展为 2*16=32，然后重新计算每个元素在数组中的位置，这是一个非常消耗性能的操作。
04. 为了避免扩容带来的性能损坏，建议使用哈希表之前，先预测哈希表需要存储元素的个数，提前为哈希表中的数组设置合适的存储空间大小，避免去执行扩容的操作，进一步提升哈希表的性能。例如：我们需要存储 1000 个元素，按照哈希表的容量设置为 2 的整数次幂的思想，我们设置哈希表的容量为 1024 更合适。但是 0.75\*1024 < 1024，需要执行消耗性能的扩容操作，因此我们设置哈希表的容量为 2048 更加合适，这样既考虑了&的问题，也避免了扩容的问题。
05. 思考：当我们创建一个 HashMap 对象，设置哈希表的容量为 15，请问 HashMap 对象创建成功后，哈希表的实际容量为多少呢？？？

## 7.17 LinkedHashMap

* LinkedHashMap 集合和 HashMap 集合的用法完全相同。
* 不过 LinkedHashMap 可以保证插入顺序。
* LinkedHashMap 集合因为可以保证插入顺序，因此效率比 HashMap 低一些。
* LinkedHashMap 是如何保证插入顺序的？底层采用了双向链表来记录顺序。
* LinkedHashMap 集合底层采用的数据结构是：哈希表 + 双向链表。
* LinkedHashMap 集合的 key 是：有序不可重复。key 部分也需要同时重写 hashCode + equals。
* key 的取值可以为 null，key 如果相同，value 也是覆盖。

## 7.18 Hashtable

* Hashtable 和 HashMap 一样，底层也是哈希表。
* Hashtable 是线程安全的，方法上都有 synchronized 关键字。使用较少，因为保证线程安全有其他方式。
* Hashtable 的初始化容量：11。默认加载因子：0.75
* Hashtable 的扩容策略：2 倍。
* Hashtable 中有一些传统方法，这些方法不属于集合框架：
* Enumeration keys(); 获取所有 key 的迭代器
* Enumeration elements(); 获取所有 value 的迭代器
* Enumeration 的相关方法
* boolean hasMoreElements(); 是否含有元素
* E nextElement(); 获取元素
* Hashtable 和 HashMap 集合的区别：
* HashMap 集合线程不安全，效率高，key 和 value 允许 null。
* Hashtable 集合线程安全，效率低，key 和 value 不允许 null。

## 7.19 Properties

01. Properties 被称为属性类。通常和 xxx.properties 属性文件一起使用。
02. Properties 的父类是 Hashtable。因此 Properties 也是线程安全的。
03. Properties 不支持泛型，key 和 value 只能是 String 类型。
04. Properties 相关方法：

* `Object setProperty(String key, String value)`; 和 put 方法一样。
* `String getProperty(String key)`; 通过 key 获取 value
* `Set<String> propertyNames()`; 获取所有的 key

## 7.20 二叉树与红黑二叉树

略

## 7.21 TreeMap

01. TreeMap 底层就是红黑树。
02. TreeMap 和 HashMap 用法一样，只不过需要 key 排序的时候，就可以使用 TreeMap。
03. TreeMap 的 key 不能是 null。
04. 让 TreeMap 集合的 key 可排序，有两种方式：

* 第一种方式：key 实现了 Comparable 接口，并且提供了 compareTo 方法，在该方法中添加了比较规则。(比较规则不变的话建议这种。)
* 第二种方式：创建 TreeMap 集合时，传一个比较器，比较器实现 Comparator 接口，在 compare 方法中添加比较规则。

## 7.22 Set 接口

01. Set 接口继承 Collection，没有任何新增任何方法。
02. Set 接口常用实现类包括：HashSet、LinkedHashSet、TreeSet。
03. 通过源码得知：HashSet 底层就是 HashMap，往 HashSet 集合中存储元素，实际上是放到了 HashMap 集合的 key 部分。因此放在 HashSet 集合中的元素，要同时重写 hashCode+equals。底层当然也是哈希表。HashSet 集合存储元素特点：无序不可重复。
04. 通过源码得知：LinkedHashSet 底层就是 LinkedHashMap。所以底层是“哈希表+双向链表”。LinkedHashSet 集合存储元素特点：有序不可重复。有序指的是存进去的顺序和取出的顺序一样。放进去的元素也需要重写 hashCode+equals。
05. 通过源码得知：TreeSet 底层就是 TreeMap。所以底层也是红黑树。TreeSet 集合存储元素特点：有序不可重复。有序表示可排序。放在 TreeSet 集合中元素要想排序，要么存储的元素实现 Comparable 接口，要么在构造 TreeSet 集合的时候传一个比较器。TreeSet 中不能存放 null。

## 7.23 Collections 工具类

* 针对 List 集合又准备了排序方法：sort
* 混排，打乱顺序：shuffle
* 反转：reverse
* 替换所有元素：fill

<a-back-top />
