<script setup lang="ts">
import AnalyticsEngagement from "@/views/dashboards/instagram/AnalyticsEngagement.vue";
import AnalyticsEngagementMom from "@/views/dashboards/instagram/AnalyticsEngagementMom.vue";
import AnalyticsReach from "@/views/dashboards/instagram/AnalyticsReach.vue";
import AnalyticsImpressions from "@/views/dashboards/instagram/AnalyticsImpressions.vue";
import AnalyticsFollowersGrowth from "@/views/dashboards/instagram/AnalyticsFollowersGrowth.vue";
import AnalyticsTopPosts from "@/views/dashboards/instagram/AnalyticsTopPosts.vue";
import AnalyticsProfileOnlineFollowers from "@/views/dashboards/instagram/AnalyticsProfileOnlineFollowers.vue";
import AnalyticsBestTimeToPost from "@/views/dashboards/instagram/AnalyticsBestTimeToPost.vue";
import AnalyticsDistributionOfSaves from "@/views/dashboards/instagram/AnalyticsDistributionOfSaves.vue";
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="4">
      <AnalyticsEngagement />
    </VCol>

    <VCol cols="12" md="8">
      <AnalyticsEngagementMom />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsReach />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsImpressions />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsFollowersGrowth />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsTopPosts />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsProfileOnlineFollowers />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsBestTimeToPost />
    </VCol>

    <VCol cols="12" md="12">
      <AnalyticsDistributionOfSaves />
    </VCol>
  </VRow>
</template>
