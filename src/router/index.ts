import { createRouter, createWebHistory } from 'vue-router'

const HotspotsView = () => import('../views/HotspotsView.vue')
const CodeHealthView = () => import('../views/CodeHealthView.vue')
const ChangeCouplingView = () => import('../views/ChangeCouplingView.vue')
const DevelopersView = () => import('../views/DevelopersView.vue')
const MappingsView = () => import('../views/MappingsView.vue')

const routes = [
  {
    path: '/',
    name: 'hotspots',
    component: HotspotsView,
  },
  {
    path: '/code-health',
    name: 'code-health',
    component: CodeHealthView,
  },
  {
    path: '/change-coupling',
    name: 'change-coupling',
    component: ChangeCouplingView,
  },
  {
    path: '/developers',
    name: 'developers',
    component: DevelopersView,
  },
  {
    path: '/mappings',
    name: 'mappings',
    component: MappingsView,
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
