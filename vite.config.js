import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // Optimizaciones de build
  build: {
    // Genera sourcemaps para debugging
    sourcemap: false,

    // Optimiza el tamaño del bundle
    minify: 'esbuild',

    // Configuración de chunks
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'lucide': ['lucide-react'],
        }
      }
    }
  },

  // Configuración de servidor
  server: {
    port: 5173,
    open: true, // Abre el navegador automáticamente
  },

  // Optimizaciones de preview
  preview: {
    port: 4173,
    open: true,
  }
})