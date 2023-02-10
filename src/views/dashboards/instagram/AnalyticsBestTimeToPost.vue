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
      height: 350,
      type: "bubble",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [currentTheme.value.warning],
    yaxis: {
      tickPlacement: "between",
      min: 1,
      max:7,
      tickAmount: 6,
      show: true,
      labels: {
        offsetX: -2,
        style: {
          fontSize: "12px",
        },
        formatter: (dayNum: number) => {
          switch (dayNum) {
            case 1:
              return "Sunday";
            case 2:
              return "Monday";
            case 3:
              return "Tuesday";
            case 4:
              return "Wednesday";
            case 5:
              return "Thursday";
            case 6:
              return "Friday";
            case 7:
              return "Saturday";
            default:
              return "Invalid day number";
          }
        },
      },
    },
    xaxis: {
      tickPlacement: "on",
      tickAmount: 23,
      labels: {
        show: true,
        formatter: (value: number) => `${value+":"+"00"+"hrs"}`,
      },
      min: 0,
      max: 23,
      crosshairs: { opacity: 0 },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    
  };
});

const series = [
  {
    name: "Day",
    data: [
      [13, 3, 84],
      [15, 3, 45],
      [18, 3, 90],
      [14, 4, 41],
      [17, 5, 53],
      [19, 6, 65],
      [17, 6, 73],
    ],
  },
];
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Best Time To Post</VCardTitle>
    </VCardItem>

    <VCardText>
      <VRow>
        <VCol cols="12">
          <VueApexCharts
            type="bubble"
            :options="options"
            :series="series"
            :height="350"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
