import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(),tailwindcss(),
    visualizer({
      filename: 'bundle-report.html', // output file
      open: true, // open browser automatically
      gzipSize: true,
      brotliSize: true,
    }),
  ],
 server:{
  port:3000,
 },
})
