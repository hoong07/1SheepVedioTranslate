import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

import manifest from './manifest.json' with { type: 'json' }
import { crx } from '@crxjs/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174,
    host: true,
  },
  plugins: [react(), tailwindcss(),crx({ manifest })],
})
