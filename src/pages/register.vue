<script setup lang="ts">
import { useTheme } from 'vuetify'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { supabase } from '@/plugins/supabase'

const privacyPolicies = ref(false)
const loading = ref(false)
const errorText = ref(false)
const errorMessage = ref('')
const email = ref('')
const password = ref('')
const isPasswordVisible = ref(false)
const handleSignUp = async () => {
    try {
        loading.value = true
        const { error } = await supabase.auth.signUp(
            {
                email: email.value,
                password: password.value,
                options: {}
            }
        )
        if (error) throw error
    } catch (error) {
        if (error instanceof Error) {
            errorMessage.value = error.message
            errorText.value = true
        }
    } finally {
        loading.value = false
        errorText.value = false
    }
}
</script>

<template>
    <VCard
      class="auth-card pa-4 pt-7 card"
      max-width="448"
    >
 
 <VCardText class="pt-2">
   <h5 class="text-h5 font-weight-semibold mb-1">
     Sign Up
   </h5>
   <p class="mb-0">
     Please fill in the form to create an account
   </p>
 </VCardText>

      <VCardText>
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="email"
                label="Email"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox
                  id="privacy-policy"
                  v-model="privacyPolicies"
                  inline
                />
                <VLabel
                  for="privacy-policy"
                  style="opacity: 1;"
                >
                  <span class="me-1">I agree to</span>
                  <a
                    href="javascript:void(0)"
                    class="text-primary"
                  >privacy policy & terms</a>
                </VLabel>
              </div>

              <VBtn
                block
                @click="handleSignUp"
              >
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Already have an account?</span>
              <RouterLink
                class="text-primary ms-2"
                to="login"
              >
                Sign in instead
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
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
</route>
