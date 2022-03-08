<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Websites</template>
      E2E website management by professional developers.
      We help you design, develop and maintain the right Website
      for your business.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Corporate Communication</template>
      Manage your corporate communication internally and externally
      from a unified endpoint. Build a good corporate communication 
      system with the help of our tools.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Advertising</template>
      Get the best tools to reach your customers on and offline
      and create the right message to capture their attention.
      Get the best designers and content creators to deliver the right
      message through the best channels.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Customer Relationship Management</template>
      The customer is king and you need to treat them right. With 
      our tools, managing customers from first contact through the
      entire life cycle is a breeze.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Social Media</template>
      Social Media is the new market. With the right tools to 
      implement your social media strategy, the entire global village 
      is within your reach. Using our Social Media tools empowers your 
      marketing team.
  </WelcomeItem>
</template>
