import path from 'path';
import { defineConfig } from 'vite';

// Никаких loadEnv не нужно для стандартного поведения Vite
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  }
});
