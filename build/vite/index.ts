import type { Plugin } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'

export function createPluginVite() {
  const vitePlugin: (Plugin | Plugin[])[] => [
    reactRefresh()
  ]

  return vitePlugin
}
