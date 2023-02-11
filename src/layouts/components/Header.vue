<script setup lang="ts">
import logo from "@/assets/images/logo.png";
import NavbarThemeSwitcher from "@/layouts/components/NavbarThemeSwitcher.vue";
</script>

<template>
  <img :src="logo" alt="Cloud Suites Logo" />
  <header>
    <NavbarThemeSwitcher class="mr-4" />
    <VListItem to="/">Home</VListItem>
    <VListItem to="solutions">Solutions</VListItem>
    <VListItem to="contacts">Contact</VListItem>
    <VListItem elevation="2" to="login" class="button">Sign In</VListItem>
  </header>
</template>

<style lang="css" scoped>
header {
  align-items: end;
  justify-content: end;
  display: flex;
  flex-direction: row;
  padding-top: 18px;
  width: 100%;
}

img {
  width: 82px;
  margin-bottom: 6px;
  margin-left: 99px;
  padding-top: 10px;
}
.button {
  color: #28243d;
  background-color: #01ff12;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 3px;
  padding-bottom: 3px;
  border-radius: 20px;
}
</style>
