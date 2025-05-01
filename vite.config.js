import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'JSHelpers',
            fileName: 'helpers-function-js',
            formats: ['es', 'umd'],
        }
    }
});