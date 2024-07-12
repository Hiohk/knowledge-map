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
      <a-input v-model:value="searchQuery" placeholder="搜索书籍或作者" style="width: 200px; margin-left: 10px" allow-clear />
      <!-- 分类选择框 -->
      <a-select v-model:value="selectedCategory" placeholder="选择分类" style="width: 150px; margin-left: 10px" allow-clear>
        <a-select-option value="">所有分类</a-select-option>
        <a-select-option v-for="category in categories" :key="category">
          {{ category }}
        </a-select-option>
      </a-select>
    </div>
    <!-- 书籍列表 -->
    <div class="book-list">
      <div v-for="book in filteredBooks" :key="book.id" @click="selectBook(book)" class="book-card">
        <div class="book">
          <div class="book-content">
            <div class="info-section">
              <div class="info-item">
                <div class="info-title">《{{ book.title }}》</div>
              </div>
              <div class="info-item">
                <span class="info-title">作者:</span>
                <span class="info-content">{{ book.author }}</span>
              </div>
              <div class="info-item">
                <span class="info-title">分类:</span>
                <span class="info-content">{{ book.category }}</span>
              </div>
              <div class="info-item">
                <span class="info-title">出版时间:</span>
                <span class="info-content">{{ book.publishDate }}</span>
              </div>
              <div class="info-item">
                <span class="info-title">推荐指数:</span>
                <a-rate :value="book.rate" disabled />
              </div>
            </div>
          </div>
          <div class="cover">
            <img :src="book.imageName" alt="book cover" class="book-cover" />
          </div>
        </div>
      </div>
    </div>
    <!-- 书籍详情弹窗 -->
    <template v-if="showBookDetail">
      <book-detail :book="selectedBook" @close="closeBookDetail" />
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
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}

.book {
  position: relative;
  border-radius: 10px;
  width: 220px;
  height: 300px;
  background-color: #fff;
  -webkit-box-shadow: 1px 1px 12px #000;
  box-shadow: 1px 1px 12px #000;
  -webkit-transform: preserve-3d;
  -ms-transform: preserve-3d;
  transform: preserve-3d;
  -webkit-perspective: 2000px;
  perspective: 2000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: #000;
}

.cover {
  top: 0;
  position: absolute;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform-origin: 0;
  -ms-transform-origin: 0;
  transform-origin: 0;
  -webkit-box-shadow: 1px 1px 12px #cfcfcf;
  box-shadow: 1px 1px 12px #cfcfcf;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.book:hover .cover {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-80deg);
}

p {
  font-size: 20px;
  font-weight: bolder;
}

.book-content {
  margin-left: 30px;
}

.rate-num {
  line-height: 100%;
}

.info-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-right: 10px;
}

.info-content {
  font-size: 14px;
  color: #666;
  display: inline;

}

p.info-content {
  display: block;
  margin: 0;
}

.info-section {
  /* margin: 10px; */
  padding: 10px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* 如果需要，可以添加响应式设计 */
@media (max-width: 768px) {
  .info-item {
    /* 在小屏幕上，你可能想要将标题和内容堆叠显示 */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* 让内容靠左对齐（如果你需要的话） */
    margin-bottom: 10px;
    /* 添加一些垂直间距 */
  }

  .info-title {
    margin-right: 0;
    /* 在堆叠模式下，不再需要右侧间距 */
    margin-bottom: 5px;
    /* 添加一些底部间距，与内容分隔 */
  }
}
</style>
