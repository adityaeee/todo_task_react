/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@animations': path.resolve(__dirname, './src/assets/animations'),
    }
  }
})


// c
// ../../../bc/namafile
// ./src == @
// ./src/bc
// @/bc