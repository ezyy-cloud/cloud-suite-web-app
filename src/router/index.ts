import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/plugins/supabase'
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach(async (to, _from, next) => {

  // get current user info
  let currentUser;

  const { data: { session } } = await supabase.auth.getSession();
  
  if (session?.user) {
      currentUser = session?.user;
  };
  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next({ name: 'login' });

  else if (!requiresAuth && currentUser) next({ name: 'overview' });

  else next();
})

export default router
