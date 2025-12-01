import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 1. Asegúrate de tener este import
import tailwindcss from '@tailwindcss/vite' // Si decidiste usar el plugin de Vite para Tailwind

export default defineConfig({
  plugins: [
    react(), // 2. ¡ESTE ES ESENCIAL!
    tailwindcss(),
  ],
})