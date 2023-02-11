<script setup lang="ts">
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

import { VerticalNavLayoutNoDrawer } from "@layouts";
import ProductBox from "./components/ProductBox.vue";
</script>
<template>
  <VerticalNavLayoutNoDrawer>
    <!-- 👉 navbar -->
    <template #navbar>
      <Header />
    </template>

    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <div class="background" />
      <RouterView />

      <ProductBox class="socialCubes" />
    </div>

    <!-- 👉 Footer -->
    <template #footer>
      <Footer class="footer"/>
    </template>
  </VerticalNavLayoutNoDrawer>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
* {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
.footer {
  margin-left: 99px;
}
.main {
  background-color: #F4F5FA!;
}
#app {
  width: 100vw;
  height: 100vh;
}
.socialCubes {
  bottom: 0;
  position: absolute;
  right: 0;
  z-index: -1;
  transition: background-color 1.5s ease;
}
.background {
  background-color: #01ff12;
  border-top-left-radius: 110%;
  bottom: 0;
  height: 63vh;
  position: absolute;
  right: 0;
  width: 42vw;
  z-index: -1;
  transition: background-color 1.5s ease;
}
.foreground {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
  width: 100vw;
  z-index: 1;
}
</style>
