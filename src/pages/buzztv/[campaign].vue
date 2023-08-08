<script setup lang="ts">
import Campaign from '@/views/dashboards/buzztv/campaigns/Campaign.vue'
</script>

<template>
    <VRow class="match-height">
        <VCol cols="12">
            <Campaign />
        </VCol>
    </VRow>
</template>
<route lang="yaml">
  meta:
    layout: default
    requiresAuth: true
  </route>