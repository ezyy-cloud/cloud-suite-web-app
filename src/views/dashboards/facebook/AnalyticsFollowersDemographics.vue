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
      height: 430,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '70%',
        startingShape: 'rounded',
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
        colors: {
          backgroundBarColors: [
            currentTheme.value.background,
            currentTheme.value.background,
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
      show: true,
    },
    colors: [currentTheme.value.secondary, currentTheme.value.info],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: [
        "13-17",
        "18-24",
        "25-34",
        "35-44",
        "45-54",
        "545-64",
        "65+",
      ],
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
    name: "Male",
    data: [44, 55, 41, 64, 22, 43, 21],
  },
  {
    name: "Female",
    data: [53, 32, 33, 52, 13, 44, 32],
  },
];

const center = { lat: 51.093048, lng: 6.84212 };

const markers = [
  {
    id: "dfsldjl3r",
    position: {
      lat: 51.093048,
      lng: 6.84212,
    },
  },
];
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12" md="6">
      <VCard>
        <VCardTitle>Followers Demographics (Ages)</VCardTitle>
        <VCardText>
          <VueApexCharts
            type="bar"
            height="430"
            :options="options"
            :series="series"
          ></VueApexCharts>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12" md="6">
      <VCard>
        <VCardTitle>Followers Demographics (Location)</VCardTitle>
        <VCardText>
          <GMapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 430px"
          >
            <GMapMarker
              :key="marker.id"
              v-for="marker in markers"
              :position="marker.position"
            />
          </GMapMap>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
