<script setup lang="ts">
import Media from '@/views/dashboards/buzztv/media/Media.vue'
</script>

<template>
    <VRow class="match-height">
        <VCol cols="12">
            <Media />
        </VCol>
    </VRow>
</template>
<route lang="yaml">
  meta:
    layout: default
    requiresAuth: true
  </route>