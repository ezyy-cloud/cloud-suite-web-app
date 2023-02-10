<script setup lang="ts">
import aviato from '@/assets/images/logos/aviato.png'
import bitbank from '@/assets/images/logos/bitbank.png'
import zipcar from '@/assets/images/logos/zipcar.png'
const earnings = [
  {
    avatar: bitbank,
    title: 'CTR',
    subtitle: 'Click Through Rate',
    amount: '29%',
    progress: 'primary',
  },
  {
    avatar: zipcar,
    title: 'CPC',
    subtitle: 'Cost Per Click',
    amount: '$8.20',
    progress: 'info',
  },
  {
    avatar: aviato,
    title: 'CPM',
    subtitle: 'Cost per Thousand Impressions',
    amount: '$1.80',
    progress: 'secondary',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Ad Spending (Year)</VCardTitle>

      <template #append>
        <div class="me-n3">
          <VBtn
            icon
            size="x-small"
            variant="text"
            color="default"
          >
            <VIcon
              size="24"
              icon="mdi-dots-vertical"
            />
          </VBtn>
        </div>
      </template>
    </VCardItem>

    <VCardText class="pt-4">
      <div class="d-flex align-center">
        <h4 class="text-h4 me-2">
          $2,895
        </h4>

        <span class="text-success">
          <VIcon
            size="30"
            icon="mdi-menu-up"
          />
          <span>10%</span>
        </span>
      </div>
      <span class="text-xs">Compared to $1,325 last year</span>

      <VList class="card-list mt-9">
        <VListItem
          v-for="earning in earnings"
          :key="earning.title"
        >
          <template #prepend>
            <VAvatar
              rounded
              :image="earning.avatar"
            />
          </template>

          <VListItemTitle class="text-sm font-weight-semibold mb-1">
            {{ earning.title }}
          </VListItemTitle>
          <VListItemSubtitle class="text-xs">
            {{ earning.subtitle }}
          </VListItemSubtitle>

          <template #append>
            <div>
              <h6 class="text-sm mb-2">
                {{ earning.amount }}
              </h6>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.card-list {
  --v-card-list-gap: 2.625rem;
}
</style>
