import { defineConfig } from 'tsup';

export default defineConfig({
    entryPoints: ['src/index.ts'],
    minify: true,
    format: ['cjs'], // Changed from 'esm' to 'cjs'
    noExternal: ['@cloud-canvas/server', '@cloud-canvas/client'],
});
