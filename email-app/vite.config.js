import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: 'email',
      filename: 'remoteEntry.js',
      remotes: {
        hostApp: "https://host-app-sepia.vercel.app/assets/remoteEntry.js", // host app port
      },
      exposes: {
        './EmailApp': './src/App.jsx'
      },
      shared: ['react', 'react-dom'],
    })
  ],
  build: { target: 'esnext' },

})
