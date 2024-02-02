---
prev:
  text: "Vue指令"
  link: "/frontend/vue/vue03"

next:
  text: "侦听器"
  link: "/frontend/vue/vue05"
---

# 4. 计算属性 computed

推荐使用计算属性来描述依赖响应式状态的复杂逻辑。在数据不发生变化时，计算属性是不需要重新计算，如果依赖的数据发生变化时，计算属性才会重新进行计算。<br />计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。只在某些特殊场景中你可能才需要用到“可写”的属性，你可以通过同时提供 getter 和 setter 来创建：

```html
<script setup>
  import { ref, computed } from "vue";

  const firstName = ref("John");
  const lastName = ref("Doe");

  const fullName = computed({
    // getter
    get() {
      return firstName.value + " " + lastName.value;
    },
    // setter
    set(newValue) {
      // 注意：我们这里使用的是解构赋值语法
      [firstName.value, lastName.value] = newValue.split(" ");
    },
  });
</script>
```
