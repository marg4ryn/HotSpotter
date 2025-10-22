import { createRouter, createWebHistory } from 'vue-router'

const Welcome = () => import('@/views/WelcomeView.vue')
const TimeRange = () => import('@/views/TimeRangeView.vue')
const Settings = () => import('@/views/SettingsView.vue')

const SystemOverview = () => import('@/views/SystemOverviewView.vue')

const TechnicalSprawl = () => import('@/views/TechnicalSprawlView.vue')
const Hotspots = () => import('@/views/HotspotsView.vue')
const ComplexityTrends = () => import('@/views/ComplexityTrendsView.vue')
const CodeAge = () => import('@/views/CodeAgeView.vue')
const ChangeCoupling = () => import('@/views/ChangeCouplingView.vue')
const DeveloperView = () => import('@/views/DeveloperViewView.vue')
const TeamView = () => import('@/views/TeamViewView.vue')
const AbandonedCode = () => import('@/views/AbandonedCodeView.vue')
const ResponsibilityDiffusion = () => import('@/views/ResponsibilityDiffusionView.vue')
const DeveloperRelationships = () => import('@/views/DeveloperRelationshipsView.vue')

const DeveloperMapping = () => import('@/views/DeveloperMappingView.vue')
const TeamMapping = () => import('@/views/TeamMappingView.vue')
const FolderMapping = () => import('@/views/FolderMappingView.vue')
const FormerDevsMapping = () => import('@/views/FormerDevsMappingView.vue')
const IgnoredFilesMapping = () => import('@/views/IgnoredFilesMappingView.vue')
const IgnoredFoldersMapping = () => import('@/views/IgnoredFoldersMappingView.vue')

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },
  {
    path: '/time-range',
    name: 'time-range',
    component: TimeRange,
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
  },

  {
    path: '/system-overview',
    name: 'system-overview',
    component: SystemOverview,
  },

  {
    path: '/technical-sprawl',
    name: 'technical-sprawl',
    component: TechnicalSprawl,
  },
  {
    path: '/hotspots',
    name: 'hotspots',
    component: Hotspots,
  },
  {
    path: '/complexity-trends',
    name: 'complexity-trends',
    component: ComplexityTrends,
  },
  {
    path: '/code-age',
    name: 'code-age',
    component: CodeAge,
  },
  {
    path: '/change-coupling',
    name: 'change-coupling',
    component: ChangeCoupling,
  },
  {
    path: '/developer-view',
    name: 'developer-view',
    component: DeveloperView,
  },
  {
    path: '/team-view',
    name: 'team-view',
    component: TeamView,
  },
  {
    path: '/abandoned-code',
    name: 'abandoned-code',
    component: AbandonedCode,
  },
  {
    path: '/responsibility-diffusion',
    name: 'responsibility-diffusion',
    component: ResponsibilityDiffusion,
  },
  {
    path: '/developer-relationships',
    name: 'developer-relationships',
    component: DeveloperRelationships,
  },

  {
    path: '/developer-mapping',
    name: 'developer-mapping',
    component: DeveloperMapping,
  },
  {
    path: '/team-mapping',
    name: 'team-mapping',
    component: TeamMapping,
  },
  {
    path: '/folder-mapping',
    name: 'folder-mapping',
    component: FolderMapping,
  },
  {
    path: '/former-developers-mapping',
    name: 'former-developers-mapping',
    component: FormerDevsMapping,
  },
  {
    path: '/ignored-files-mapping',
    name: 'ignored-files-mapping',
    component: IgnoredFilesMapping,
  },
  {
    path: '/ignored-folders-mapping',
    name: 'ignored-folders-mapping',
    component: IgnoredFoldersMapping,
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
