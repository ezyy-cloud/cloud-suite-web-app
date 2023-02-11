<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";
import { hexToRgb } from "@layouts/utils";

const vuetifyTheme = useTheme();

const options = computed(() => {
  const currentTheme = ref(vuetifyTheme.current.value.colors);
  const variableTheme = ref(vuetifyTheme.current.value.variables);

  const disabledColor = `rgba(${hexToRgb(currentTheme.value["on-surface"])},${
    variableTheme.value["disabled-opacity"]
  })`;
  const borderColor = `rgba(${hexToRgb(
    String(variableTheme.value["border-color"])
  )},${variableTheme.value["border-opacity"]})`;

  return {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    stroke: {
      width: 2,
      colors: [currentTheme.value.primary, currentTheme.value.secondary, currentTheme.value.info],
    },
    legend: {
      show: true,
      labels: {
        colors: [currentTheme.value["on-surface"]],
        useSeriesColors: false,
      },
    },
    grid: {
      borderColor,
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5,
      },
    },
    dataLabels: { enabled: false },
    colors: [currentTheme.value.secondary, currentTheme.value.info],
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    xaxis: {
      tickPlacement: "on",
      labels: {
        show: true,
        style: {
          colors: disabledColor,
          fontSize: "12px",
        },
      },
      crosshairs: { opacity: 0 },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: true,
      tickAmount: 5,
      labels: {
        offsetX: -17,
        style: {
          colors: disabledColor,
          fontSize: "12px",
        },

        formatter: (value: number) => `${value.toFixed(0)}`,
      },
    },
  };
});

const series = [
  {
    name: "Total Impressions",
    data: [42, 52, 73.5, 83, 76, 119, 76, 83, 83, 73.5, 52, 42, 64, 88, 120,42, 52, 73.5, 83, 76, 119, 76, 83, 83, 73.5, 52, 42, 64, 88, 120],
  },
  {
    name: "Paid Impressions",
    data: [11, 32, 45, 32, 34, 52, 31, 40, 28.5, 51, 42, 67, 22, 12, 10, 11, 32, 45, 32, 34, 52, 31, 40, 28.5, 51, 42, 67, 22, 12, 10],
  },
  {
    name: "Organic Impressions",
    data: [31, 40, 28.5, 51, 42, 67, 11, 32, 45, 32, 34, 52, 42, 76, 110, 31, 40, 28.5, 51, 42, 67, 11, 32, 45, 32, 34, 52, 42, 76, 110],
  },
];
</script>

<template>
  <div>
    <VCard>
      <VCardTitle>Daily Impressions</VCardTitle>
      <VCardText>
      <VRow>
        <VCol cols="12">
          <VueApexCharts
            type="line"
            :options="options"
            :series="series"
            :height="220"
          />
        </VCol>
      </VRow>
    </VCardText>
    </VCard>
    <VRow class="mt-1">
      <VCol cols="12" md="4">
        <VCard>
          <VCardTitle>Total Impressions</VCardTitle>
          <VCardText class="pt-4">
            <div class="d-flex align-center">
              <h4 class="text-h4 me-2">124K</h4>

              <span class="text-success">
                <VIcon size="30" icon="mdi-menu-up" />
                <span>25%</span>
              </span>
            </div>
            <span class="text-xs">Compared to 74K last month</span>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="4">
        <VCard>
          <VCardTitle>Organic Impressions</VCardTitle>
          <VCardText class="pt-4">
            <div class="d-flex align-center">
              <h4 class="text-h4 me-2">64K</h4>

              <span class="text-success">
                <VIcon size="30" icon="mdi-menu-up" />
                <span>12%</span>
              </span>
            </div>
            <span class="text-xs">Compared to 48K last month</span>
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12" md="4">
        <VCard>
          <VCardTitle>Paid Impressions</VCardTitle><VCardText class="pt-4">
            <div class="d-flex align-center">
              <h4 class="text-h4 me-2">26K</h4>

              <span class="text-success">
                <VIcon size="30" icon="mdi-menu-down" color="#FF0000"/>
                <span  style="color: red">8%</span>
              </span>
            </div>
            <span class="text-xs">Compared to 32K last month</span>
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
