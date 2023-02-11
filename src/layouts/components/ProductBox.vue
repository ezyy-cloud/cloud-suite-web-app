<script setup lang="ts">
import img1 from '@/assets/images/pages/img1.png'
import img2 from '@/assets/images/pages/img2.png'
import img3 from '@/assets/images/pages/img3.png'

const currentImage = "img1"
</script>

<template>
  <section>
      <transition
        name="fade"
        mode="out-in"
      >
        <img v-if="currentImage === 'img1'" :src="img1" alt="Product1" key="img1">
        <img v-else-if="currentImage === 'img2'" :src="img2" alt="Product2" key="img2">
        <img v-else-if="currentImage === 'img3'" :src="img3" alt="Product3" key="img3">
      </transition>
  </section>
</template>


<style lang="css" scoped>
  .fade-enter-to, .fade-leave-from {
    transform: scale(1.0);
    opacity: 1;
    transition-property: transform, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }

  .fade-enter-from, .fade-leave-to {
    transform: scale(0.3);
    opacity: 0;
    transition-property: transform, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }

  img {
    align-self: flex-end;
    margin-right: 12vw;
    margin-bottom: 10vh;
    width: 26.4vw;
    scale: 2;
  }
</style>
