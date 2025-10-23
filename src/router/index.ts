import { createRouter, createWebHistory, Router } from 'vue-router'
import { i18n } from '@/i18n'

const Welcome = () => import('@/views/WelcomeView.vue')
const TimeRange = () => import('@/views/TimeRangeView.vue')
const Settings = () => import('@/views/SettingsView.vue')
const About = () => import('@/views/AboutView.vue')
const Attributions = () => import('@/views/AttributionsView.vue')

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

export default function (): Router {
  const { t } = i18n.global

  const routes = [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/time-range',
      name: 'time-range',
      meta: { title: t('title.time-range') },
      component: TimeRange,
    },
    {
      path: '/settings',
      name: 'settings',
      meta: { title: t('title.settings') },
      component: Settings,
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: t('title.about') },
      component: About,
    },
    {
      path: '/attributions',
      name: 'attributions',
      meta: { title: t('title.attributions') },
      component: Attributions,
    },

    {
      path: '/system-overview',
      name: 'system-overview',
      meta: { title: t('title.system-overview') },
      component: SystemOverview,
    },

    {
      path: '/technical-sprawl',
      name: 'technical-sprawl',
      meta: { title: t('title.technical-sprawl') },
      component: TechnicalSprawl,
    },
    {
      path: '/hotspots',
      name: 'hotspots',
      meta: { title: t('title.hotspots') },
      component: Hotspots,
    },
    {
      path: '/complexity-trends',
      name: 'complexity-trends',
      meta: { title: t('title.complexity-trends') },
      component: ComplexityTrends,
    },
    {
      path: '/code-age',
      name: 'code-age',
      meta: { title: t('title.code-age') },
      component: CodeAge,
    },
    {
      path: '/change-coupling',
      name: 'change-coupling',
      meta: { title: t('title.change-coupling') },
      component: ChangeCoupling,
    },
    {
      path: '/developer-view',
      name: 'developer-view',
      meta: { title: t('title.developer-view') },
      component: DeveloperView,
    },
    {
      path: '/team-view',
      name: 'team-view',
      meta: { title: t('title.team-view') },
      component: TeamView,
    },
    {
      path: '/abandoned-code',
      name: 'abandoned-code',
      meta: { title: t('title.abandoned-code') },
      component: AbandonedCode,
    },
    {
      path: '/responsibility-diffusion',
      name: 'responsibility-diffusion',
      meta: { title: t('title.responsibility-diffusion') },
      component: ResponsibilityDiffusion,
    },
    {
      path: '/developer-relationships',
      name: 'developer-relationships',
      meta: { title: t('title.developer-relationships') },
      component: DeveloperRelationships,
    },

    {
      path: '/developer-mapping',
      name: 'developer-mapping',
      meta: { title: t('title.developer-mapping') },
      component: DeveloperMapping,
    },
    {
      path: '/team-mapping',
      name: 'team-mapping',
      meta: { title: t('title.team-mapping') },
      component: TeamMapping,
    },
    {
      path: '/folder-mapping',
      name: 'folder-mapping',
      meta: { title: t('title.folder-mapping') },
      component: FolderMapping,
    },
    {
      path: '/former-developers-mapping',
      name: 'former-developers-mapping',
      meta: { title: t('title.former-developers-mapping') },
      component: FormerDevsMapping,
    },
    {
      path: '/ignored-files-mapping',
      name: 'ignored-files-mapping',
      meta: { title: t('title.ignored-files-mapping') },
      component: IgnoredFilesMapping,
    },
    {
      path: '/ignored-folders-mapping',
      name: 'ignored-folders-mapping',
      meta: { title: t('title.ignored-folders-mapping') },
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

  router.beforeEach((to, from, next) => {
    const baseTitle = 'HotSpotter'
    const newTitle = to.meta.title ? `${to.meta.title} - ${baseTitle}` : baseTitle
    document.title = newTitle
    next()
  })

  return router
}
