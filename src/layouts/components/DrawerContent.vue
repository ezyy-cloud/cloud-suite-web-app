<script setup lang="ts">
import upgradeBannerDark from '@/assets/images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@/assets/images/pro/upgrade-banner-light.png'
import logo from '@/assets/logo.svg?raw'
import { VerticalNavLink, VerticalNavSectionTitle } from '@layouts'
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()
const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light'
    ? upgradeBannerLight
    : upgradeBannerDark
})
</script>

<template>
  <!-- 👉 Nav header -->
  <div class="nav-header">
    <RouterLink
      to="/overview"
      class="app-logo d-flex align-center gap-x-3 app-title-wrapper"
    >
      <!-- ℹ️ You can also use img tag or VImg here -->
      <div v-html="logo" />

      <Transition name="vertical-nav-app-title">
        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">
          Cloud Suites
        </h1>
      </Transition>
    </RouterLink>
  </div>

  <!-- 👉 Nav items -->
  <ul>
    <VerticalNavLink
      :item="{
        title: 'Overview',
        to: 'overview',
        icon: { icon: 'mdi-home-outline' }
      }"
    />
    <!-- <VerticalNavLink
      :item="{
        title: 'Account Settings',
        to: 'account-settings',
        icon: { icon: 'mdi-account-cog-outline' }
      }"
    /> -->
    <!-- 👉 Pages -->
    <VerticalNavSectionTitle :item="{ heading: 'Dashboards' }" />

    <VerticalNavLink
      :item="{
        title: 'Website',
        to: 'website',
        icon: { icon: 'mdi-web' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'BuzzTV',
        to: 'buzztv',
        icon: { icon: 'mdi-television' }
      }"
    />
  </ul>
</template>

<style lang="scss">
.v-navigation-drawer {
  height: 100%;

  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;

    > ul {
      flex-grow: 1;
    }
  }
}

.upgrade-banner {
  margin-top: auto;
  position: absolute;
  bottom: 13px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
