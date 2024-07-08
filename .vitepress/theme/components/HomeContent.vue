<script setup>
import { ref } from "vue";
import SponsorList from "./SponsorList.vue";
import RightFloatButton from "./RightFloatButton.vue";
import TimeLineEvent from "./TimeLineEvent.vue";
import RecommendationBlog from "./RecommendationBlog.vue";
import LikeVideo from "./LikeVideo.vue";
import HomeResource from "./HomeResource.vue";

</script>

<template>
  <div class="container">
    <div class="sponsor-by">
      <sponsor-list></sponsor-list>
    </div>
    <div>
      <home-resource></home-resource>
    </div>

    <div class="time-line-event">
      <a-row :gutter="16">
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div v-intersect="{
        enter: 'animate__fadeIn',
        duration: 'animate__duration-2s',
      }">
            <time-line-event></time-line-event>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div v-intersect="{
        enter: 'animate__fadeInUp',
        duration: 'animate__duration-2s',
      }">
            <recommendation-blog></recommendation-blog>
          </div>
        </a-col>
      </a-row>
    </div>

    <div class="like-video" v-intersect="{
        enter: 'animate__fadeInUp',
        duration: 'animate__duration-2s',
      }">
      <like-video></like-video>
    </div>

    <div>
      <right-float-button></right-float-button>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  max-width: 1280px;
  padding: 0 24px;
  border-radius: 6px;
  margin: 10px auto;
  animation: Gradient 4s ease infinite;
}

@media (min-width: 640px) {
  .container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .container {
    width: 100%;
    padding: 0 64px;
  }
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

/* .vgl-layout {
  --vgl-placeholder-bg: pink;
} */

.time-line-event {
  margin-top: 50px;
}

.loading-more {
  text-align: center;
}
</style>
