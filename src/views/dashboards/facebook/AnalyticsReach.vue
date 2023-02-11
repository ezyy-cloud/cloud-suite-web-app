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
        horizontal: true,
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
    colors: [
      currentTheme.value.secondary,
      currentTheme.value.info,
      currentTheme.value.secondary,
      currentTheme.value.info,
    ],
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
      categories: ["Status", "Photo", "Link", "Video"],
      tickPlacement: 'on',
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

      labels: {
        show: true,
        style: {
          colors: disabledColor,
          fontSize: "12px",
        },
      },
    }
  };
});

const series = [
  {
    name: "Reached",
    data: [4000, 2330, 448, 8070],
  },
];
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <VCard>
        <VCardTitle>Reach (Organic)</VCardTitle>
        <VCardText>
          <VueApexCharts
            type="bar"
            height="220"
            :options="options"
            :series="series"
          ></VueApexCharts>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="6">
      <VCard>
        <VCardTitle>Reach (Paid)</VCardTitle>
        <VCardText>
          <VueApexCharts
            type="bar"
            height="220"
            :options="options"
            :series="series"
          ></VueApexCharts>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
