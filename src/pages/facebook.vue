<script setup lang="ts">
import AnalyticsEngagement from "@/views/dashboards/facebook/AnalyticsEngagement.vue";
import AnalyticsEngagementMom from "@/views/dashboards/facebook/AnalyticsEngagementMom.vue";
import AnalyticsReach from "@/views/dashboards/facebook/AnalyticsReach.vue";
import AnalyticsImpressions from "@/views/dashboards/facebook/AnalyticsImpressions.vue";
import AnalyticsFollowersDemographics from "@/views/dashboards/facebook/AnalyticsFollowersDemographics.vue";
import AnalyticsAdExpense from "@/views/dashboards/facebook/AnalyticsAdExpense.vue";
import AnalyticsTotalProfitLineCharts from "@/views/dashboards/facebook/AnalyticsTotalProfitLineCharts.vue";
import AnalyticsFanCount from "@/views/dashboards/facebook/AnalyticsFanCount.vue";
import CardStatisticsVertical from "@core/components/CardStatisticsVertical.vue";
import AnalyticsTopPosts from "@/views/dashboards/facebook/AnalyticsTopPosts.vue";


const totalProfit = {
  title: 'Video Views',
  color: 'secondary',
  icon: 'mdi-video',
  stats: '445k',
  change: 42,
  subtitle: 'Per Week',
}

const newProject = {
  title: 'Retention',
  color: 'info',
  icon: 'mdi-eye',
  stats: '862',
  change: -18,
  subtitle: 'Per Year',
}
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

    <VCol cols="12" md="4">
      <AnalyticsFanCount />
    </VCol>

    <VCol cols="12" md="4">
      <AnalyticsAdExpense />
    </VCol>

    <VCol cols="12" md="4">
      <VRow class="match-height">
        <VCol cols="12" sm="12">
          <AnalyticsTotalProfitLineCharts />
        </VCol>

        <VCol cols="12" sm="6">
          <CardStatisticsVertical v-bind="totalProfit" />
        </VCol>

        <VCol cols="12" sm="6">
          <CardStatisticsVertical v-bind="newProject" />
        </VCol>
      </VRow>
    </VCol>

    <VCol cols="12">
      <AnalyticsFollowersDemographics />
    </VCol>

    <VCol cols="12">
      <AnalyticsTopPosts />
    </VCol>
  </VRow>
</template>
