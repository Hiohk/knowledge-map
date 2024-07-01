<script setup>
import { ref, computed } from "vue";
import BookDetail from "./BookDetail.vue";

const searchQuery = ref("");
const selectedCategory = ref("");
const selectedBook = ref(null);
const showBookDetail = ref(false);

const props = defineProps({
  books: {
    type: Array,
    default: () => [],
  },
});

const categories = ref(["前端", "后端"]);

// 过滤后的书籍列表
const filteredBooks = computed(() => {
  return props.books.filter((book) => {
    const matchesCategory =
      !selectedCategory.value || book.category === selectedCategory.value;
    const matchesSearch =
      !searchQuery.value ||
      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.value.toLowerCase());
    return matchesCategory && matchesSearch;
  });
});

// 选择书籍时设置 selectedBook
const selectBook = (book) => {
  selectedBook.value = book;
  showBookDetail.value = true;
};

const closeBookDetail = () => {
  showBookDetail.value = false;
};
</script>

<template>
  <div class="book-recommendation">
    <div class="header">
      <h2>推荐书籍</h2>
      <!-- 搜索输入框 -->
      <a-input
        v-model:value="searchQuery"
        placeholder="搜索书籍或作者"
        style="width: 200px; margin-left: 10px"
        allow-clear
      />
      <!-- 分类选择框 -->
      <a-select
        v-model:value="selectedCategory"
        placeholder="选择分类"
        style="width: 150px; margin-left: 10px"
        allow-clear
      >
        <a-select-option value="">所有分类</a-select-option>
        <a-select-option v-for="category in categories" :key="category">
          {{ category }}
        </a-select-option>
      </a-select>
    </div>
    <!-- 书籍列表 -->
    <div class="book-list">
      <a-card
        v-for="book in filteredBooks"
        :key="book.id"
        :title="book.title"
        hoverable
        @click="selectBook(book)"
        class="book-card"
      >
        <img :src="book.imageName" alt="book cover" class="book-cover" />
        <p>{{ book.author }}</p>
      </a-card>
    </div>
    <!-- 书籍详情弹窗 -->
    <template v-if="showBookDetail">
      <BookDetail :book="selectedBook" @close="closeBookDetail" />
    </template>
  </div>
</template>

<style scoped>
.book-recommendation {
  padding: 20px;
  background: #f5f5f5;
  border-radius: 16px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.book-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.book-card:hover {
  transform: scale(1.05);
}
.book-cover {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
