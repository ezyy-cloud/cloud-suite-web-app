<script setup lang="ts">
const statistics = [
  {
    title: 'Facebook',
    stats: '245k',
    icon: 'mdi-facebook',
    color: 'secondary',
  },
  {
    title: 'Instagram',
    stats: '12.5k',
    icon: 'mdi-instagram',
    color: 'warning',
  },
  {
    title: 'Twitter',
    stats: '1.54k',
    icon: 'mdi-twitter',
    color: 'info',
  },
  {
    title: 'LinkedIn',
    stats: '88k',
    icon: 'mdi-linkedin',
    color: 'success',
  },
]
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>Following</VCardTitle>

      <template #append>
        <div class="me-n3">
          <VBtn
            icon
            color="default"
            size="x-small"
            variant="text"
          >
            <VIcon
              size="24"
              icon="mdi-dots-vertical"
            />
          </VBtn>
        </div>
      </template>
    </VCardItem>

    <VCardText>
      <h6 class="text-sm mb-12">
        <span>284 new followers 😎</span>
        <span class="font-weight-regular"> this month</span>
      </h6>

      <VRow>
        <VCol
          v-for="item in statistics"
          :key="item.title"
          cols="6"
          sm="3"
        >
          <div class="d-flex align-center">
            <div class="me-3">
              <VAvatar
                :color="item.color"
                rounded
                size="42"
                class="elevation-1"
              >
                <VIcon
                  size="24"
                  :icon="item.icon"
                />
              </VAvatar>
            </div>

            <div class="d-flex flex-column">
              <span class="text-caption">
                {{ item.title }}
              </span>
              <span class="text-h6 font-weight-medium">{{ item.stats }}</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
