<script lang="ts">
export default {
  data: () => ({
    onboarding: 0,
    solutions: [
      {
        name: "Build Tech Infrastructure",
        description:
          "End to end development of technologies that enable you to offer your products and services online. We help you design, develop and maintain the perfect technologies for your business.",
        tagLine: "Digital infrastructure",
        icon: "mdi-web",
        background: "https://www.healthcareitnews.com/sites/hitn/files/Tech%20Optimize%20Infrastructure%20712.jpg",
      },
      {
        name: "Corporate Communication",
        description:
          "Manage your corporate communication internally and externally from a unified endpoint. Build a good corporate communication system with the help of our tools.",
        tagLine: "A robust communication platform",
        icon: "mdi-face-agent",
        background: "https://corp.kaltura.com/wp-content/uploads/2021/05/WebRTC-Video-Streaming_Header.png",
      },
      {
        name: "Engage and Impress",
        description:
          "Social Media is the new market. With the right tools to implement your social media strategy, the entire global village is within your reach.",
        tagLine: "Social Spaces",
        icon: "mdi-cards-heart",
        background: "https://www.fenews.co.uk/wp-content/uploads/2022/01/social-media-1200x800.jpg",
      },
      {
        name: "Start Advertising",
        description:
          "Get the best tools to reach your customers on and offline. Get the best designers and content creators to deliver the right message through the best channels.",
        tagLine: "Introducing your business",
        icon: "mdi-advertisements",
        background: "https://insidesmallbusiness.com.au/wp-content/uploads/2021/04/The-lies-advertising-agencies-tell.jpg",
      },
      {
        name: "Lasting Relationships",
        description:
          "The customer is king and you need to treat them right. With our tools, managing customers from first contact through the entire life cycle is a breeze.",
        tagLine: "Customer Relationship Management",
        icon: "mdi-forum-outline",
        background: "https://www.zimyellow.com/uploads/news-pictures/16450-harare-blog-post-image-20220713163834.png",
      },
    ],
  }),

  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 > this.solutions.length ? 1 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 <= 0 ? this.solutions.length : this.onboarding - 1;
    },
  },
};
</script>

<template>
  <div class="card">
    <v-card rounded="5"  width="100%">
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in solutions.length"
          :key="`card-${n}`"
          :value="n"
        >
          <v-card height="100%" :prepend-icon="solutions[n - 1].icon">
            <v-img
              height="250"
              :src="solutions[n - 1].background"
              cover
              class="text-white"
            />
            <template v-slot:title>
              {{ solutions[n - 1].tagLine }}
            </template>
            <v-card-text>
              <p class="text-h4 text--primary font-weight-bold">
                {{ solutions[n - 1].name }}
              </p>
              <div class="text--primary">
                {{ solutions[n - 1].description }}
              </div>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-space-between">
        <v-btn variant="plain" icon="mdi-chevron-left" @click="prev"></v-btn>
        <v-item-group v-model="onboarding" class="text-center" mandatory>
          <v-item
            v-for="n in solutions.length"
            :key="`btn-${n}`"
            v-slot="{ isSelected, toggle }"
            :value="n"
          >
            <v-btn
              :variant="isSelected ? 'outlined' : 'text'"
              icon="mdi-record"
              @click="toggle"
            ></v-btn>
          </v-item>
        </v-item-group>
        <v-btn variant="plain" icon="mdi-chevron-right" @click="next"></v-btn>
      </v-card-actions>
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
  width: 35vw;
  height: 75vh;
}
</style>
