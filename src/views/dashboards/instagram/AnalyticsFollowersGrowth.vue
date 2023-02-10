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
      colors: [currentTheme.value.warning],
      curve: "smooth"
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
    colors: [currentTheme.value.success, currentTheme.value.error],
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
      labels: {
        offsetX: -17,
        style: {
          fontSize: "12px",
        },
      },
    },
  };
});

const series = [
  {
    name: "Reached",
    data: [4000, 2330, 448, 8070, 4000, 2330, 448, 8070, 448, 8070, 4000, 2330],
  },
];
</script>

<template>
      <VCard>
        <VCardTitle>Follower's Growth</VCardTitle>
        <VCardText>
          <VueApexCharts
            type="line"
            height="220"
            :options="options"
            :series="series"
          ></VueApexCharts>
        </VCardText>
      </VCard>
</template>
