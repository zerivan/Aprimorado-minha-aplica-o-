import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Configuração atualizada — usa a API ESM moderna
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
  },
})
