import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '../views/HelloWorld.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld,
      meta: { requiresAuth: false, title: 'Strona główna' },
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: HelloWorld,
      meta: { requiresAuth: false, title: 'Strona nie znaleziona' },
    },
  ],
})

export default router
