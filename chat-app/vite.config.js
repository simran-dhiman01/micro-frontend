// chat-app/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'chat',
      filename: 'remoteEntry.js',
      remotes: {
        hostApp: "https://host-app-sepia.vercel.app/assets/remoteEntry.js", // host app port
      },
      exposes: {
        './ChatApp': './src/App.jsx',
        './events':'./src/utils/event'
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
})
