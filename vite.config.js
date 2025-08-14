import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // 這裡的 'portfolio' 是你的 repo 名稱
});