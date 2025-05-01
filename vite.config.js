import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'JSHelpers',
            fileName: 'js-helpers',
            formats: ['es', 'umd'],
        }
    }
});