<script setup lang="ts">
import NewCampaign from '@/views/dashboards/buzztv/campaigns/NewCampaign.vue'
</script>

<template>
    <VRow class="match-height">
        <VCol cols="12">
            <NewCampaign/>
        </VCol>
    </VRow>
</template>
<route lang="yaml">
  meta:
    layout: default
    requiresAuth: true
  </route>