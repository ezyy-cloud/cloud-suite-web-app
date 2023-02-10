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
  <VRow class="match-height">
    <VCol cols="12" md="4">
      
        <VCard height="140" class="mb-6">
          <VCardTitle>Profile Reach</VCardTitle>
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
        
        <VCard height="140">
          <VCardTitle>Profile Reach/Followers Rate</VCardTitle>
            <VCardText class="pt-4">
            <div class="d-flex align-center">
              <h4 class="text-h4 me-2">124%</h4>

              <span class="text-success">
                <VIcon size="30" icon="mdi-menu-up" />
                <span>12%</span>
              </span>
            </div>
            <span class="text-xs">Compared to 98K last month</span>
          </VCardText>
        </VCard>
    </VCol>

    <VCol cols="12" md="8">
      <VCard>
        <VCardTitle>Profile Reach</VCardTitle>
        <VCardText>
          <VueApexCharts
            type="line"
            height="220"
            :options="options"
            :series="series"
          ></VueApexCharts>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
