import { fileURLToPath } from 'node:url'
import { mergeConfig } from 'vite'
import { configDefaults, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      root: fileURLToPath(new URL('./', import.meta.url)),
      include: ['tests/**/*.spec.ts', 'src/**/*.spec.ts'],
      exclude: [...configDefaults.exclude, 'e2e/*'],
      transformMode: {
        web: [/.[jt]sx$/],
      },
    },
  })
)
