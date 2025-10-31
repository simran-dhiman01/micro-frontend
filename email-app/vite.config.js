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
        hostApp: "http://localhost:4175/assets/remoteEntry.js", // host app port
      },
      exposes: {
        './EmailApp': './src/App.jsx'
      },
      shared: ['react', 'react-dom'],
    })
  ],
  //server: { port: 3000 },
  build: { target: 'esnext' },

})
