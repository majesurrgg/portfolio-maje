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
    host: true, // vite x seguridad solo muestra la web en la laptop (localhost),
    // con esto le decimos que abra la red local y así poder acceder desde el móvil
    // esto habilita el acceso por IP local, lo que es útil para pruebas en dispositivos móviles o en la red local
  },

  // Optimizaciones de preview
  preview: {
    port: 4173,
    open: true,
  }
})