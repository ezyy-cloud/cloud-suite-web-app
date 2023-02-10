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
      type: "radialBar",
    },
    colors: [currentTheme.value.success, currentTheme.value.error],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "5px",
          },
          value: {
            fontSize: "22px",
          },
          total: {
            show: true,
            label: "Average",
            formatter: (w: {
              globals: { seriesTotals: any[]; series: string | any[] };
            }) =>
              (w.globals.seriesTotals.reduce((a: number, b: number) => {
                return a + b;
              }, 0) /
                w.globals.series.length).toFixed(0) +
              "%",
          },
        },
      },
    },
    labels: ["Reach", "Followers"],
  };
});

const series = [44, 55];
</script>

<template>
  <VCard
    title="Engagement"
    subtitle="Average engagement this month"
    class="position-relative"
  >
    <VCardText>
      <VueApexCharts
        type="radialBar"
        height="220"
        :options="options"
        :series="series"
      ></VueApexCharts>
    </VCardText>
  </VCard>
</template>

<style lang="scss"></style>
