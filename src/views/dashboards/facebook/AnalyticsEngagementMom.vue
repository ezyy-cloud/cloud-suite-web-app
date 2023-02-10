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
      colors: [currentTheme.value.surface],
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      tickPlacement: "on",
      labels: {
        show: true,
      },
      crosshairs: { opacity: 0 },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: {
      show: true,
      tickAmount: 5,
      min: 0,
      max: 100,
      labels: {
        offsetX: -17,
        style: {
          fontSize: "12px",
        },
        formatter: (value: number) => `${value.toFixed(0)}%`,
      },
    },
  };
});

const series = [
  {
    name: "Reach",
    data: [31, 40, 28.5, 51, 42, 67, 11, 32, 45, 32, 34, 52],
  },
  {
    name: "Followers",
    data: [11, 32, 45, 32, 34, 52, 31, 40, 28.5, 51, 42, 67],
  },
];
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Engagement (MoM)</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="12">
          <VueApexCharts
            type="area"
            :options="options"
            :series="series"
            :height="220"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
