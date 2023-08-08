<script setup lang="ts">
import AnalyticsAward from '@/views/dashboards/website/AnalyticsAward.vue'
import AnalyticsBarCharts from '@/views/dashboards/website/AnalyticsBarCharts.vue'
import AnalyticsDatatable from '@/views/dashboards/website/AnalyticsDatatable.vue'
import AnalyticsDepositWithdraw from '@/views/dashboards/website/AnalyticsDepositWithdraw.vue'
import AnalyticsSalesByCountries from '@/views/dashboards/website/AnalyticsSalesByCountries.vue'
import AnalyticsTotalEarning from '@/views/dashboards/website/AnalyticsTotalEarning.vue'
import AnalyticsTotalProfitLineCharts from '@/views/dashboards/website/AnalyticsTotalProfitLineCharts.vue'
import AnalyticsFollowing from '@/views/dashboards/website/AnalyticsFollowing.vue'
import AnalyticsWeeklyOverview from '@/views/dashboards/website/AnalyticsWeeklyOverview.vue'
import CardStatisticsVertical from '@core/components/CardStatisticsVertical.vue'

</script>

<template>
  <VRow class="match-height">
    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsAward />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsFollowing />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsWeeklyOverview />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsTotalEarning />
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <VRow class="match-height">
        <VCol
          cols="12"
          sm="6"
        >
          <AnalyticsTotalProfitLineCharts />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical v-bind="totalProfit" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <CardStatisticsVertical v-bind="newProject" />
        </VCol>

        <VCol
          cols="12"
          sm="6"
        >
          <AnalyticsBarCharts />
        </VCol>
      </VRow>
    </VCol>

    <VCol
      cols="12"
      md="4"
    >
      <AnalyticsSalesByCountries />
    </VCol>

    <VCol
      cols="12"
      md="8"
    >
      <AnalyticsDepositWithdraw />
    </VCol>

    <VCol cols="12">
      <AnalyticsDatatable />
    </VCol>
  </VRow>
</template>

<route lang="yaml">
  meta:
    layout: default
    requiresAuth: true
  </route>