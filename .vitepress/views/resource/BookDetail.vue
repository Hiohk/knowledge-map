<script setup>
import { ref } from "vue";

const props = defineProps({
  book: Object,
});

const emit = defineEmits(["close"]);

const isVisible = ref(true);

const close = () => {
  isVisible.value = false;
  emit("close", false);
};
</script>

<template>
  <div>
    <a-modal v-model:visible="isVisible" title="书籍详情" @cancel="close" :footer="null" :maskClosable="false">
      <div class="book-detail">
        <img :src="book.imageUrl" alt="book cover" class="book-cover" />
        <a-descriptions class="book-info" :title="book.title" :column="1">
          <a-descriptions-item label="作者">
            {{ book.author }}
          </a-descriptions-item>
          <a-descriptions-item label="简介">
            <span class="description">
              <a-tooltip placement="right">
                <template #title>
                  <span>{{ book.description }}</span>
                </template>
                {{ book.description }}
              </a-tooltip>
            </span>
          </a-descriptions-item>
          <a-descriptions-item label="分类">
            {{ book.category }}
          </a-descriptions-item>
          <a-descriptions-item label="出版时间">
            {{ book.publishDate }}
          </a-descriptions-item>
          <a-descriptions-item label="推荐指数">
            <a-rate class="rate-num" :value="book.rate" disabled />
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </a-modal>
  </div>
</template>

<style scoped>
.book-detail {
  display: flex;
  align-items: center;
  gap: 20px;
}

.book-cover {
  max-width: 150px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.book-info {
  flex: 1;
}

.book-info h2 {
  margin-bottom: 10px;
  font-size: 1.5em;
}

.book-info p {
  margin-bottom: 10px;
  color: #333;
}

/* 控制简介内容最多显示三行 */
.description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  /* 最多显示的行数 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.rate-num {
  line-height: 100%;
}
</style>
