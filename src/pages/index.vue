<template>
  <content />
</template>

<script setup lang="ts">
import content from "@/views/pages/landing/content.vue";
</script>

<style>
</style>
<route lang="yaml">
meta:
  layout: landing
  action: read
  subject: Auth
</route>
