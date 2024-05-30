---
prev:
  text: "IO 流"
  link: "/backend/java/java08"

next:
  text: "反射机制"
  link: "/backend/java/java10"
---

# 9. 多线程

## 9.1 线程概述

1. 什么是进程？什么是线程？它们的区别？

- 进程是指操作系统中的一段程序，它是一个正在执行中的程序实例，具有独立的内存空间和系统资源，如文件、网络端口等。在计算机程序执行时，先创建进程，再在进程中进行程序的执行。一般来说，一个进程可以包含多个线程。
- 线程是指进程中的一个执行单元，是进程的一部分，它负责在进程中执行程序代码。每个线程都有自己的栈和程序计数器，并且可以共享进程的资源。多个线程可以在同一时刻执行不同的操作，从而提高了程序的执行效率。
- 现代的操作系统是支持多进程的，也就是可以启动多个软件，一个软件就是一个进程。称为：多进程并发。
- 通常一个进程都是可以启动多个线程的。称为：多线程并发。

2. 多线程的作用？

提高处理效率。（多线程的优点之一是能够使 CPU 在处理一个任务时同时处理多个线程，这样可以充分利用 CPU 的资源，提高 CPU 的利用效率。）

3. JVM 规范中规定：

- 堆内存、方法区 是线程共享的。
- 虚拟机栈、本地方法栈、程序计数器 是每个线程私有的。

4. 关于 Java 程序的运行原理

- “java HelloWorld”执行后，会启动 JVM，JVM 的启动表示一个进程启动了。
- JVM 进程会首先启动一个主线程（main-thread），主线程负责调用 main 方法。因此 main 方法是在主线程中运行的。
- 除了主线程之外，还启动了一个垃圾回收线程。因此启动 JVM，至少启动了两个线程。
- 在 main 方法的执行过程中，程序员可以手动创建其他线程对象并启动。

![alt text](image/image-17.png)

## 9.2 并发与并行

### 并发（concurrency）

1. 使用单核 CPU 的时候，同一时刻只能有一条指令执行，但多个指令被快速的轮换执行，使得在宏观上具有多个指令同时执行的效果，但在微观上并不是同时执行的，只是把时间分成若干端，使多个指令快速交替的执行。

2. 如上图所示，假设只有一个 CPU 资源，线程之间要竞争得到执行机会。图中的第一个阶段，在 A 执行的过程中，B、C 不会执行，因为这段时间内这个 CPU 资源被 A 竞争到了，同理，第二阶段只有 B 在执行，第三阶段只有 C 在执行。其实，并发过程中，A、B、C 并不是同时进行的（微观角度），但又是同时进行的（宏观角度）。
3. 在同一个时间点上，一个 CPU 只能支持一个线程在执行。因为 CPU 运行的速度很快，CPU 使用抢占式调度模式在多个线程间进行着高速的切换，因此我们看起来的感觉就像是多线程一样，也就是看上去就是在同一时刻运行。

![alt text](image/image-18.png)

### 并行（parallellism）

使用多核 CPU 的时候，同一时刻，有多条指令在多个 CPU 上同时执行。如图所示，在同一时刻，ABC 都是同时执行（微观、宏观）。

![alt text](image/image-19.png)

### 并发编程与并行编程

1. 在 CPU 比较繁忙（假设为单核 CPU），如果开启了很多个线程，则只能为一个线程分配仅有的 CPU 资源，这些线程就会为自己尽量多抢时间片，这就是通过多线程实现并发，线程之间会竞争 CPU 资源争取执行机会。
2. 在 CPU 资源比较充足的时候，一个进程内的多个线程，可以被分配到不同的 CPU 资源，这就是通过多线程实现并行。
3. 至于多线程实现的是并发还是并行？上面所说，所写多线程可能被分配到一个 CPU 内核中执行，也可能被分配到不同 CPU 执行，分配过程是操作系统所为，不可人为控制。所以，如果有人问我我所写的多线程是并发还是并行的？我会说，都有可能。
4. 总结：单核 CPU 上的多线程，只是由操作系统来完成多任务间对 CPU 的运行切换，并非真正意义上的并发。随着多核 CPU 的出现，也就意味着不同的线程能被不同的 CPU 核得到真正意义的并行执行，故而多线程技术得到广泛应用。
5. 不管并发还是并行，都提高了程序对 CPU 资源的利用率，最大限度地利用 CPU 资源，而我们使用多线程的目的就是为了提高 CPU 资源的利用率。

## 9.3 线程的调度模型

1. 如果多个线程被分配到一个 CPU 内核中执行，则同一时刻只能允许有一个线程能获得 CPU 的执行权，那么进程中的多个线程就会抢夺 CPU 的执行权，这就是涉及到线程调度策略。

2. 分时调度模型

所有线程轮流使用 CPU 的执行权，并且平均的分配每个线程占用的 CPU 的时间。

3. 抢占式调度模型

让优先级高的线程以较大的概率优先获得 CPU 的执行权，如果线程的优先级相同，那么就会随机选择一个线程获得 CPU 的执行权，而 Java 采用的就是抢占式调用。

## 9.4 实现线程

1. 第一种方式：继承 Thread

- 编写一个类继承 Thread，重写 run 方法。
- 创建线程对象：`Thread t = new MyThread()`;
- 启动线程：`t.start()`;

2. 第二种方式：实现 Runnable 接口

- 编写一个类实现 Runnable 接口，实现 run 方法。
- 创建线程对象：`Thread t = new Thread(new MyRunnable())`;
- 启动线程：`t.start()`;

优先选择第二种方式：因为实现接口的同时，保留了类的继承。第二种方式也可以使用匿名内部类。

3. `t.start()` 和 `t.run()` 的本质区别？

- 本质上没有区别，都是普通方法调用。只不过两个方法完成的任务不同。
- `t.run()` 是调用 run 方法。执行 run 方法中的业务代码。
- `t.start()` 是启动线程，只要线程启动了，start() 方法就执行结束了。

4. 线程常用的三个方法：

- 实例方法：
  - `String getName()`：获取线程对象的名字
  - `void setName(String name)`：修改线程的名字
- 静态方法：`static Thread currentThread()`：获取当前线程对象的引用（地址）

## 9.5 线程生命周期

1. 线程生命周期指的是：从线程对象新建，到最终线程死亡的整个过程。
2. 线程生命周期包括七个重要阶段：

- 新建状态（NEW）
- 就绪状态（RUNNABLE）
- 运行状态（RUNNABLE）
- 超时等待状态（TIMED_WAITING）
- 等待状态（WAITING）
- 阻塞状态（BLOCKED）
- 死亡状态（TERMINATED）

![alt text](image/image-20.png)

## 9.6 线程的休眠与终止

### 线程的休眠

`static void sleep(long millis)` :

让当前线程进入休眠，也就是让当前线程放弃占有的 CPU 时间片，让其进入阻塞状态。

### 线程休眠的终止

1. 通过 interrupt() 方法来终止：

```Java
Thread t = new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + "begin");
        try {
            Thread.sleep(1000 * 60 * 60 * 24 * 365);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "do something");
    }
});
t.start();

try {
    Thread.sleep(1000 * 5);
} catch (InterruptedException e) {
    throw new RuntimeException(e);
}
// 终止t线程的睡眠
t.interrupt();
```

2. 通过设置标记来终止：

```Java
public class ThreadTest05 {
    public static void main(String[] args) {
        MyRunnableTest mr = new MyRunnableTest();
        Thread t = new Thread(mr);
        t.start();
        try {
            Thread.sleep(5000);
        } catch(InterruptedException e) {
            throw new RuntimeException(e);
        }
        mr.run = false;
    }
}

class MyRunnableTest implements Runnable {
    boolean run = true;

    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            if (run) {
                System.out.println(Thread.currentThread().getName() + "---->" + i);
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            } else {
                return;
            }
        }
    }
}
```

## 9.7 守护线程

线程分为两大类：1. 用户线程（非守护线程）；2. 守护线程。在 JVM 中有一个隐藏的守护线程，它就是 GC 线程。

守护线程的特点：所有的用户线程结束之后，守护线程自动退出或结束。

```Java
// 在启动线程之前，设置线程为守护线程
t.setDaemon(true);
```

## 9.8 定时任务

1. JDK 中提供的定时任务：

- `java.util.Timer`: 定时器
- `java.util.TimerTask`: 定时任务

2. 定时器+定时任务可以帮助我们在程序中完成每间隔一段时间执行一次某段程序。
3. Timer 的构造方法

- `Timer()`
- `Timer(boolean isDaemon)`

::: code-group

```Java [ThreadTest06.class]
public class ThreadTest06 {

    public static void main(String[] args) throws Exception{
        Timer timer = new Timer(true);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date firstTime = sdf.parse("2024-04-21 13:35:00");
        timer.schedule(new LogTimerTask(),firstTime,1000);

        for (int i = 0; i < 10; i++) {
            Thread.sleep(1000);
        }

    }

}

```

```Java [LogTimerTask.class]
public class LogTimerTask extends TimerTask {

    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss SSS");
    int count = 0;

    @Override
    public void run() {
        Date now = new Date();
        String strTime = sdf.format(now);
        System.out.println(strTime + ":" + count++);
    }

}
```

:::

## 9.9 线程的调度

### 线程的合并

调用 `join()` 方法实现线程的合并，join() 方法是一个实例方法，不是静态方法。通过 `t.join()` 实现让当前线程进入阻塞状态，直到线程结束，当前线程阻塞解除。 `t.join(10)` : 让当前线程阻塞 10ms，如果在 10ms 内，t 线程结束了，当前线程阻塞也会解除。

sleep() 和 join() 方法的区别：

- sleep 方法是静态方法，join 方法是实例方法；
- sleep 方法可以指定睡眠时长，而 join 方法不能保证阻塞的时长；
- sleep 和 join 方法都是让当前线程进入阻塞状态；
- sleep 方法的阻塞解除条件：时间结束。join 方法的阻塞解除条件：调用 join 方法的线程结束。

### 线程的优先级

线程可以设置优先级，优先级较高的线程获得 CPU 时间片的总体概率高一些。JVM 采用的是抢占式调度模型，谁的优先级高，获取 CPU 时间片的总体概率就高。默认情况下，一个线程的优先级是 5。线程的优先级最低是 1，最高是 10。

```Java
System.out.println("线程的最低优先级：" + Thread.MIN_PRIORITY); // 1
System.out.println("线程的最高优先级：" + Thread.MAX_PRIORITY); // 10
System.out.println("线程的默认优先级：" + Thread.NORM_PRIORITY); // 5
Thread mainThread = Thread.currentThread();
// 设置优先级
mainThread.setPriority(6);
```

### 线程让位

`Thread.yield()` : 让当前线程让位，让位不会让其进入阻塞状态，只是放弃某个点让位一次。只能保证大方向上的，大概率到某个点让位一次。

::: code-group

```Java [ThreadTest08.class]
public class ThreadTest08 {

    public static void main(String[] args) {
        Thread t1 = new MyThread();
        t1.setName("t1");

        Thread t2 = new MyThread();
        t2.setName("t2");

        t1.start();
        t2.start();

    }

}

```

```Java [MyThread.class]
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 500; i++) {
            if (Thread.currentThread().getName().equals("t1") && i % 10 == 0) {
                System.out.println(Thread.currentThread().getName() + "让位一次," + i);
                Thread.yield();
            }
            System.out.println(Thread.currentThread().getName() + "--->" + i);
        }
    }
}
```

:::

## 9.10 线程安全问题

### 线程安全问题

1. 什么情况下需要考虑线程安全问题？

- 多线程的并发环境；
- 有共享的数据；
- 共享数据涉及到修改的操作；

2. 存在线程安全的情况

- 局部变量不存在线程安全问题。（基本数据类型不存在线程安全问题，因为栈是不共享的，引用数据类型不一定）
- 实例变量可能存在线程安全问题，实例变量在堆中，堆是多线程共享的。
- 静态变量可能存在线程安全问题，静态边浪在堆中，堆是多线程共享的。

### 线程同步机制

线程同步的本质是：线程排队执行。

语法格式：

```Java
synchronized(obj) {
  // 需要同步的代码
}
// 必须是需要排队的线程共享对象。
// 否则会无故增加同步的线程数量，导致效率降低
```

或者在实例方法上添加 `synchronized` 关键字，整个方法则是一个同步代码块，共享对象的对象锁一定是 this。

在静态方法上添加 `synchronized` 关键字之后，线程会占有类锁，一个类只有一个类锁，无论创建了几个对象。

### 死锁

线程死锁是指两个或两个以上的线程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞现象，若无外力作用，它们都将无法推进下去。此时称系统处于死锁状态或系统产生了死锁，这些永远在互相等待的线程称为死锁线程。

线程死锁可能由以下原因引起：

- 系统资源不足：当系统中供多个线程共享的资源数量不足以满足所有线程的需求时，线程之间可能会因为竞争资源而产生死锁。
- 线程推进顺序不当：线程在运行过程中，请求和释放资源的顺序不当，可能导致线程死锁。
- 资源分配不当：例如，线程 1 持有资源 2，线程 2 持有资源 1，但他们同时都想申请对方的资源，因此这两个线程会相互等待而进入死锁状态。

为了避免线程死锁，可以采取以下策略：

- 避免嵌套锁：在使用多个锁的情况下，尽量使用一种锁，或者按照相同的顺序获取锁。
- 使用超时机制：在获取锁的过程中，设置超时时间，如果超时还未获得锁，则放弃对锁的请求，避免因等待锁而陷入死锁。
- 避免无限等待：通过使用非阻塞锁，避免在等待锁的过程中陷入无限等待的状态。
- 死锁检测：在程序运行时，使用死锁检测工具检测是否存在死锁情况，及时解决。
- 合理设计线程间的依赖关系：通过合理设计线程间的依赖关系，避免出现不合理的循环依赖。

::: code-group

```Java [SellTicket.class]
public class SellTicket {

    public static void main(String[] args) {
        MyRunnableTicket mr = new MyRunnableTicket();
        Thread t1 = new Thread(mr);
        Thread t2 = new Thread(mr);
        Thread t3 = new Thread(mr);

        t1.setName("t1");
        t2.setName("t2");

        t3.setName("t3");

        t1.start();
        t2.start();

        t3.start();

    }

}

```

```Java [MyRunnableTicket.class]
class MyRunnableTicket implements Runnable {
    private int ticketTotal = 100;

    @Override
    public void run() {
        while (true) {
            synchronized (this) {
                if (ticketTotal <= 0) {
                    System.out.println("票已售完...");
                    break;
                }
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println(Thread.currentThread().getName() + "售出一张票，余票：" + (--ticketTotal));
            }
        }
    }
}
```

:::

## 9.11 线程间的通信

1. 线程通信的三个方法：wait()、notify()、notifyAll()

- `wait()`: 线程执行该方法后，进入等待状态，并且释放对象锁。
- `notify()`: 唤醒优先级最高的那个等待状态的线程。【优先级相同的，随机选一个】。被唤醒的线程从当初 wait()的位置继续执行。
- `notifyAll()`: 唤醒所有 wait() 的线程

调用 wait 方法和 notify 方法，不是通过线程对象去调用，而是通过共享对象调用。notify 方法唤醒优先级最高的等待线程。
如果优先级相同，则随机唤醒一个。notifyAll 方法欢迎所有在该共享对象上等待的线程。

2. 需要注意的：

- 以上三个方法在使用时，必须在同步代码块中或同步方法中。
- 调用这三个方法的对象必须是共享的锁对象。
- 这三个方法都是 Object 类的方法。

3. wait()和 sleep 的区别？

- 相同点：都会阻塞。
- 不同点：
  - wait 是 Object 类的实例方法。sleep 是 Thread 的静态方法。
  - wait 只能用在同步代码块或同步方法中。sleep 随意。
  - wait 方法执行会释放对象锁。sleep 不会。
  - wait 结束时机是 notify 唤醒，或达到指定时间。sleep 结束时机是到达指定时间。

example1 两个线程交替输出：
::: code-group

```Java [ThreadTest.class]
public class ThreadTest {

    public static void main(String[] args) {
        MyRunnable mr = new MyRunnable();
        Thread t1 = new Thread(mr);
        Thread t2 = new Thread(mr);

        t1.setName("t1");
        t2.setName("t2");

        t1.start();
        t2.start();

    }

}

```

```Java [MyRunnable.class]
class MyRunnable implements Runnable {
    private int count = 0;

    @Override
    public void run() {
        while (true) {
            synchronized (this) {
                this.notify();
                if (count >= 100) {
                    break;
                }
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
                System.out.println(Thread.currentThread().getName() + "--->" + (++count));
                try {
                    // 让其中一个线程等待
                    this.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
```

:::

example2 三个线程交替输出：
::: details 点我查看代码

```Java
public class ThreadTest02 {

    private static final Object lock = new Object();
    private static boolean t1Output = true;
    private static boolean t2Output = false;
    private static boolean t3Output = false;

    public static void main(String[] args) {
        new Thread(new MyRunnable() {
           @Override
           public void run() {
               synchronized (lock) {
                   for (int i = 0; i < 10; i++) {
                       while(!t1Output) {
                           try {
                               lock.wait();
                           } catch (InterruptedException e) {
                               throw new RuntimeException(e);
                           }
                       }
                       // t1线程唤醒
                       System.out.println(Thread.currentThread().getName()+"---A");
                       t1Output = false;
                       t2Output = true;
                       t3Output = false;
                       lock.notifyAll();
                   }
               }

           }
        }).start();

        new Thread(new MyRunnable() {
            @Override
            public void run() {
                synchronized (lock) {
                    for (int i = 0; i < 10; i++) {
                        while(!t2Output) {
                            try {
                                lock.wait();
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        }
                        // t1线程唤醒
                        System.out.println(Thread.currentThread().getName()+"---B");
                        t1Output = false;
                        t2Output = false;
                        t3Output = true;
                        lock.notifyAll();
                    }
                }

            }
        }).start();

        new Thread(new MyRunnable() {
            @Override
            public void run() {
                synchronized (lock) {
                    for (int i = 0; i < 10; i++) {
                        while(!t3Output) {
                            try {
                                lock.wait();
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                        }
                        // t1线程唤醒
                        System.out.println(Thread.currentThread().getName()+"---C");
                        t1Output = true;
                        t2Output = false;
                        t3Output = false;
                        lock.notifyAll();
                    }
                }

            }
        }).start();

    }
}ƒ
```

:::

## 9.12 单例模式的线程安全问题

第一种方法，同步方法，找类锁

::: code-group

```Java [SingletonTest.class]
public class SingletonTest {

    private static Singleton s1;
    private static Singleton s2;

    public static void main(String[] args) {
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                s1 = Singleton.getSingleton();
            }
        });

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                s2 = Singleton.getSingleton();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        try {
            t2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s1 == s2);

    }

}

```

```Java [Singleton.class]
class Singleton {
    private static Singleton singleton;
    private Singleton() {
        System.out.println("构造方法执行了");
    }

    public static synchronized Singleton getSingleton() {
        if(singleton == null) {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            singleton = new Singleton();
        }
        return singleton;
    }
}
```

:::

第二种方法，同步代码块，找类锁

::: code-group

```java [SingletonTest.class]
public class SingletonTest {

    private static Singleton s1;
    private static Singleton s2;

    public static void main(String[] args) {
        Thread t1 = new Thread(new Runnable() {
            @Override
            public void run() {
                s1 = Singleton.getSingleton();
            }
        });

        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                s2 = Singleton.getSingleton();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }

        try {
            t2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s1 == s2);

    }

}

```

```Java [Singleton.class]
class Singleton {

    private static Singleton singleton;

    private Singleton() {
        System.out.println("构造方法执行了");

    }

    public static Singleton getSingleton() {
        if (singleton == null) {
            synchronized (Singleton.class) {
                if (singleton == null) {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    singleton = new Singleton();
                }
            }
        }
        return singleton;

    }

}
```

:::

## 9.13 可重入锁

也可以使用 Lock 来实现线程安全，Lock 是接口，从 JDK5 开始引入。Lock 接口下有一个实现类，可重入锁 `ReentrantLock` 。

```Java
class Singleton {
    private static Singleton singleton;

    private Singleton() {
        System.out.println("构造方法执行了");
    }

    private static final ReentrantLock lock = new ReentrantLock();

    public static Singleton getSingleton() {
        if (singleton == null) {
            try {
                lock.lock();
                if (singleton == null) {
                    try {
                        Thread.sleep(2000);
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                    singleton = new Singleton();
                }
            } finally {
                lock.unlock();
            }
        }
        return singleton;
    }
}
```

## 9.14 Callable 实现线程

实现线程的第三种方式：实现 Callable 接口，实现 call 方法。这种方式实现的线程可以获取到线程的返回值。

```Java
FutureTask<Integer> task = new FutureTask<>(new Callable<Integer>() {
    @Override
    public Integer call() throws Exception {
        Thread.sleep(5000);
        return 1;
    }
});

Thread t = new Thread(task);
t.start();

try {
    Integer i = task.get();
    System.out.println(i);
} catch (Exception e) {
    throw new RuntimeException(e);
}
System.out.println("执行结束...");
```

## 9.15 线程池实现线程

创建线程的第四种方法：使用线程池技术。线程池本质上是一个缓存：cache。一般是服务器启动的时候，初始化线程池。

```Java
ExecutorService executorService = Executors.newFixedThreadPool(3);
executorService.submit(new Runnable() {
    @Override
    public void run() {
        for (int i = 0; i < 10; i++) {
            System.out.println(Thread.currentThread().getName() + "--->" + i);
        }
    }
});
executorService.shutdown();
```

<a-back-top />

<reading-progress-bar/>