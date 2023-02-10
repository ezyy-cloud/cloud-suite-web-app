<script lang="ts" setup>
import avatar1 from "@/assets/images/avatars/avatar-1.png";
import avatar4 from "@/assets/images/avatars/avatar-4.png";
import avatar8 from "@/assets/images/avatars/avatar-8.png";

const solidCardData = [
  {
    cardBg: "#3B5998",
    title: "Facebook Card",
    icon: "mdi-facebook",
    text: "You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an.",
    avatarImg: avatar1,
    avatarName: "Eugene Clarke",
    likes: "3.2k",
    share: "49",
    comments: "32",
  },
  {
    cardBg: "#3B5998",
    title: "Facebook Card",
    icon: "mdi-facebook",
    text: "You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an.",
    avatarImg: avatar1,
    avatarName: "Eugene Clarke",
    likes: "3.2k",
    share: "49",
    comments: "62",
  },
  {
    cardBg: "#3B5998",
    title: "Facebook Card",
    icon: "mdi-facebook",
    text: "You've read about the importance of being courageous, rebellious and imaginative. These are all vital ingredients in an.",
    avatarImg: avatar1,
    avatarName: "Eugene Clarke",
    likes: "3.2k",
    share: "49",
    comments: "22",
  },
];
</script>

<template>
  <VCardTitle>Top Posts</VCardTitle>
  <VRow>
    <VCol
      v-for="data in solidCardData"
      :key="data.icon"
      cols="12"
      md="6"
      lg="4"
    >
      <VCard :color="data.cardBg">
        <VCardItem>
          <template #prepend>
            <VIcon size="1.9rem" color="white" :icon="data.icon" />
          </template>
          <VCardTitle class="text-white">
            {{ data.title }}
          </VCardTitle>
        </VCardItem>

        <VCardText class="text-white">
          {{ data.text }}
        </VCardText>

        <VCardText class="d-flex justify-space-between align-center flex-wrap">
          <div class="text-no-wrap">
            <VAvatar size="34" :image="data.avatarImg" />
            <span class="text-white ms-2">{{ data.avatarName }}</span>
          </div>

          <div>
            <VIcon
              icon="mdi-heart"
              color="white"
              size="1.2rem"
              class="me-2 cursor-pointer"
            />
            <span class="text-subtitle-2 text-white me-2">{{
              data.likes
            }}</span>

            <VIcon
              icon="mdi-share-variant"
              color="white"
              size="1.2rem"
              class="me-2 cursor-pointer"
            />
            <span class="text-subtitle-2 text-white me-2">{{
              data.share
            }}</span>

            <VIcon
              icon="mdi-chat"
              color="white"
              size="1.2rem"
              class="me-2 cursor-pointer"
            />
            <span class="text-subtitle-2 text-white me-2">{{
              data.comments
            }}</span>
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
