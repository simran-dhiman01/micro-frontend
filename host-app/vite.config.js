import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      exposes: {
        "./design-system": "./src/design-system/index.js",    //expose shared components so that chat app and email app can use them.
      },
      remotes: {
        chat: 'https://micro-frontend-pi.vercel.app/assets/remoteEntry.js',
        email: 'https://email-app-mfe.vercel.app/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom'],
    })
  ],
  //server: { port: 5000 },
  build: { target: 'esnext' }
})
