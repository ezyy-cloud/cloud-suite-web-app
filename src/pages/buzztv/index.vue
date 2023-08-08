<script setup lang="ts">
import Campaigns from '@/views/dashboards/buzztv/campaigns/Campaigns.vue'
</script>

<template>
    <VRow class="match-height">
        <VCol cols="12">
            <Campaigns />
        </VCol>
    </VRow>
</template>
<route lang="yaml">
  meta:
    layout: default
    requiresAuth: true
  </route>