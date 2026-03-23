import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePrerender } from 'vite-plugin-prerender'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 82 },
    }),
    VitePrerender({
      routes: ['/'],
      rendererOptions: {
        renderAfterDocumentEvent: 'render-event',
      },
    }),
  ],
})