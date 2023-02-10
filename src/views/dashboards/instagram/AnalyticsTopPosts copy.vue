<script lang="ts" setup>
import pages1 from '@/assets/images/pages/1.png'

</script>

<template>
  <VCardTitle>Top Posts</VCardTitle>
  <VRow>
    <VCol
      cols="12"
      md="6"
      lg="4"
    >
    <VCard>
        <VImg
          :src="pages1"
          cover
        />

        <VCardItem>
          <VCardTitle>Influencing The Influencer</VCardTitle>
        </VCardItem>

        <VCardText>
          Cancun is back, better than ever! Over a hundred Mexico resorts have reopened and the state tourism minister predicts Cancun will draw as many visitors in 2006 as it did two years ago.
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
