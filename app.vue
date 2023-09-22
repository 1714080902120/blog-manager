<template>
  <div
    class="page_wrapper bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5"
  >
    <div class="page_wrapper_bg" :style="bgStyle"></div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import bgImg from "assets/img/_bg.png";
const bgStyle = {
  backgroundImage: `url(${bgImg})`,
};



</script>

<style>
.page_wrapper_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: repeat;
  background-position: top;
  z-index: -1;
}
</style>
