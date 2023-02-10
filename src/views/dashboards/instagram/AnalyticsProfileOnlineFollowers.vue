<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import { useTheme } from "vuetify";
import { hexToRgb } from "@layouts/utils";

const vuetifyTheme = useTheme();

function generateData(min: number, max: number, length: number): number[] {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
  return result;
}

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
      height: 350,
      type: "heatmap",
      toolbar: {
        show: false,
      }
    },
    dataLabels: {
      enabled: false,
    },
    colors: [currentTheme.value.warning],
    yaxis: {
      show: true,
      labels: {
        offsetX: -17,
        style: {
          fontSize: "12px",
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
      tickAmount: 24,
      labels: {
        show: true,
        formatter: (value: number) => `${value.toFixed(0)+":"+"00"+"hrs"}`,
      },
      crosshairs: { opacity: 0 },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
  };
});

const series = [
  {
    name: "Sunday",
    data: generateData(0, 90, 24),
  },
  {
    name: "Monday",
    data: generateData(0, 90, 24),
  },
  {
    name: "Tuesday",
    data: generateData(0, 90, 24),
  },
  {
    name: "Wednesday",
    data: generateData(0, 90, 24),
  },
  {
    name: "Thursday",
    data: generateData(0, 90, 24),
  },
  {
    name: "Friday",
    data: generateData(0, 90, 24),
  },
  {
    name: "Saturday",
    data: generateData(0, 90, 24),
  },
];
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Profile Online Followers</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="12">
          <VueApexCharts
            type="heatmap"
            :options="options"
            :series="series"
            :height="350"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
