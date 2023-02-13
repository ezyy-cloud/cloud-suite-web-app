<script lang="ts">
export default {
  data: () => ({
    items: [
      { text: "@cloudsuite", icon: "mdi-facebook" },
      { text: "@cloudsuite", icon: "mdi-twitter" },
      { text: "@cloudsuite", icon: "mdi-instagram" },
      { text: "@cloudsuite", icon: "mdi-linkedin" },
      { text: "@cloudsuite", icon: "mdi-youtube" },
      { text: "@cloudsuite", icon: "mdi-pinterest" },
      { text: "+263774481007", icon: "mdi-whatsapp" },
      { text: "csuite.ezyy.cloud", icon: "mdi-web" },
      { text: "csuite@ezyy.cloud", icon: "mdi-email" },
    ],
  }),
};
</script>

<template>
    <div class="card">
  <v-card width="70%">
    <v-list density="compact">
      <v-list-subheader>GET IN TOUCH</v-list-subheader>

      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item"
        active-color="primary"
        height="5vh"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" color="primary"></v-icon>
        </template>

        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</div>
</template>

<style lang="css" scoped>
.card {
  margin-left: 99px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40vw;
  height: 60vh;
}
</style>
