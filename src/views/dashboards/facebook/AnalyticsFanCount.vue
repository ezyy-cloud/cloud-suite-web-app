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
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: "40%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    stroke: {
      width: 2,
      colors: [currentTheme.value.surface],
    },
    legend: { show: false },
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
    colors: [
      currentTheme.value.secondary,
      currentTheme.value.secondary,
      currentTheme.value.secondary,
      currentTheme.value.secondary,
      currentTheme.value.secondary,
      currentTheme.value.primary,
    ],
    states: {
      hover: { filter: { type: "none" } },
      active: { filter: { type: "none" } },
    },
    xaxis: {
      categories: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
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
      tickAmount: 4,
      labels: {
        offsetX: -17,
        style: {
          colors: disabledColor,
          fontSize: "12px",
        },

        formatter: (value: number) =>
          `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`,
      },
    },
  };
});

const series = [{ name: "Followers", data: [2, 3.5, 3.8, 4.5, 6, 6.8] }];
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Fan Count</VCardTitle>

      <template #append>
        <div class="me-n3">
          <VBtn icon size="x-small" color="default" variant="text">
            <VIcon size="24" icon="mdi-dots-vertical" />
          </VBtn>
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <VueApexCharts
        type="bar"
        :options="options"
        :series="series"
        :height="250"
      />

      <div class="d-flex align-center mb-3">
        <h5 class="text-h5 me-4">450</h5>
        <p>Your have 450 new fans 😎 compared to last month</p>
      </div>
    </VCardText>
  </VCard>
</template>
