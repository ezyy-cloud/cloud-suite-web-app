<script setup lang="ts">
import AuthProvider from "@/views/pages/authentication/AuthProvider.vue";

const form = ref({
  email: "",
  password: "",
  remember: false,
});

const isPasswordVisible = ref(false);
</script>

<template>
  <VCard class="auth-card pa-4 pt-7 card" max-width="448">
    <VCardText class="pt-2">
      <h5 class="text-h5 font-weight-semibold mb-1">Sign in</h5>
      <p class="mb-0">Please sign-in to your account and access your suites</p>
    </VCardText>

    <VCardText>
      <VForm @submit.prevent="() => {}">
        <VRow>
          <!-- email -->
          <VCol cols="12">
            <VTextField v-model="form.email" label="Email" type="email" />
          </VCol>

          <!-- password -->
          <VCol cols="12">
            <VTextField
              v-model="form.password"
              label="Password"
              :type="isPasswordVisible ? 'text' : 'password'"
              :append-inner-icon="
                isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'
              "
              @click:append-inner="isPasswordVisible = !isPasswordVisible"
            />

            <!-- remember me checkbox -->
            <div
              class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4"
            >
              <VCheckbox v-model="form.remember" label="Remember me" />

              <a class="ms-2 mb-1" href="javascript:void(0)">
                Forgot Password?
              </a>
            </div>

            <!-- login button -->
            <VBtn block type="submit" to="/overview"> Login </VBtn>
          </VCol>

          <!-- create account -->
          <VCol cols="12" class="text-center text-base">
            <span>New on our platform?</span>
            <RouterLink class="text-primary ms-2" :to="{ name: 'register' }">
              Create an account
            </RouterLink>
          </VCol>

          <VCol cols="12" class="d-flex align-center">
            <VDivider />
            <span class="mx-4">or</span>
            <VDivider />
          </VCol>

          <!-- auth providers -->
          <VCol cols="12" class="text-center">
            <AuthProvider />
          </VCol>
        </VRow>
      </VForm>
    </VCardText>
  </VCard>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
.card {
  margin-left: 99px;
}
</style>

<route lang="yaml">
meta:
  layout: landing
  action: read
  subject: Auth
</route>
