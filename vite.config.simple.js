import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { componentTagger } from 'lovable-tagger'

// Basic vite config without complex imports
export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})