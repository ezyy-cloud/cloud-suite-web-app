<script setup lang="ts">
import { useRouter } from 'vue-router'
import { provide, onBeforeMount } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from '@/plugins/apollo'
import useUserStore from '@/store/userStore';
import { supabase } from '@/plugins/supabase';

const router = useRouter()
const store = useUserStore()

provide(DefaultApolloClient, apolloClient )

onBeforeMount(async () => {
  // we initially verify if a user is logged in with Supabase
  const { data: { session } } = await supabase.auth.getSession();
  
  if (session?.user) {
    store.setUser(supabase.auth.getUser())
  };
  // we then set up a listener to update the store when the user changes either by logging in or out
  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_OUT") {

      store.setUser({});

      router.push({ name: 'index' })

    } else if (event == 'SIGNED_IN') {

      if (session != null) {
        store.setUser(session.user);
      }

      router.push({ name: 'overview' })

    } else {

      if (session != null)
      store.setUser(session.user);
    }
  });
})
</script>
<template>
  <VApp>
    <VLayout class="layout-wrapper layout-nav-type-vertical">
      <RouterView />
    </VLayout>
  </VApp>
</template>
