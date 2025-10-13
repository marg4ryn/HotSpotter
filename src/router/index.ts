import { createRouter, createWebHistory } from 'vue-router'

const HotspotsView = () => import('../views/HotspotsView.vue')

const routes = [
  {
    path: '/',
    name: 'hotspots',
    component: HotspotsView,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
