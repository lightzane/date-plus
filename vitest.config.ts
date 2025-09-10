import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Enable global test APIs like `describe`, `it`, etc.
  },
  plugins: [
    tsconfigPaths(), // Enable path aliasing based on tsconfig.json
  ],
});
