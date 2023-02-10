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
      type: "bar",
      height: 220,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '40%',
        distributed: true,
        startingShape: 'rounded',
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
        horizontal: false,
        colors: {
          backgroundBarColors: [
            currentTheme.value.background,
            currentTheme.value.background,
            currentTheme.value.background,
            currentTheme.value.background
          ],
          backgroundBarOpacity: 0.2,
          backgroundBarRadius: 0,
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor,
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: 0,
        bottom: 5,
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 4,
      colors: [currentTheme.value.surface],
    },
    states: {
      hover: { filter: { type: 'none' } },
      active: { filter: { type: 'none' } },
    },
    xaxis: {
      categories: [],
      tickPlacement: 'on',
      labels: { show: false },
      crosshairs: { opacity: 0 },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
  };
});

const series = [
  {
    name: "Post Impressions",
    data: [42, 52, 73.5, 83, 76, 119, 76, 83, 83, 73.5, 52, 42, 64],
  },
];
</script>

<template>
  <div>
    <VCard>
      <VCardTitle>Post Impressions (Month)</VCardTitle>
      <VCardText>
      <VRow>
        <VCol cols="12">
          <VueApexCharts
            type="bar"
            :options="options"
            :series="series"
            :height="220"
          />
        </VCol>
      </VRow>
    </VCardText>
    </VCard>
  </div>
</template>
