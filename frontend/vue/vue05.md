---
prev:
  text: "计算属性"
  link: "/frontend/vue/vue04"

next:
  text: "类与样式绑定"
  link: "/frontend/vue/vue06"
---

# 5. 侦听器 watch

## watch(args1,args2,args3)

args1: 要侦听的源头；args2: 侦听的回调函数 `callback; args3: {deep: true, immediate: true}`

```html
<script setup>
  import { ref, watch } from "vue";

  const question = ref("");
  const answer = ref("Questions usually contain a question mark. ;-)");

  // 可以直接侦听一个 ref
  watch(question, async (newQuestion, oldQuestion) => {
    if (newQuestion.indexOf("?") > -1) {
      answer.value = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        answer.value = (await res.json()).answer;
      } catch (error) {
        answer.value = "Error! Could not reach the API. " + error;
      }
    }
  });
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
</template>
```

## 侦听数据源类型
watch 的第一个参数可以是不同形式的“数据源”：它可以是一个 ref (包括计算属性)、一个响应式对象、一个 getter 函数、或多个数据源组成的数组：
```javascript
const x = ref(0)
const y = ref(0)
const obj = reactive({ count: 0 })Ï

// 单个 ref
watch(x, (newX) => {
  console.log(`x is ${newX}`)
})

// getter 函数
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`)
  }
)

// 多个来源组成的数组
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`)
})

// 侦听响应式对象的属性值
// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)
```

## watchEffect()
```javascript
watchEffect(async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  data.value = await response.json()
})
```
对于这种只有一个依赖项的例子来说，watchEffect() 的好处相对较小。但是对于有多个依赖项的侦听器来说，使用 watchEffect() 可以消除手动维护依赖列表的负担。此外，如果你需要侦听一个嵌套数据结构中的几个属性，watchEffect() 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。

## 回调的触发时机
如果想在侦听器回调中能访问被 Vue 更新**之后**的 DOM，你需要指明 flush: 'post' 选项：

```javascript
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})

import { watchPostEffect } from 'vue'
watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})
```

## 停止侦听器
```javascript
const unwatch = watchEffect(() => {})

// ...当该侦听器不再需要时
unwatch()
```

注意，需要异步创建侦听器的情况很少，请尽可能选择同步创建。如果需要等待一些异步数据，你可以使用条件式的侦听逻辑。