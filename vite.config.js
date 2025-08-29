import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Viraj_Portfolio/', // GitHub Pages repo name
  build: {
    outDir: 'build',
  },
});
