import { defineConfig } from 'vite';

export default ({
    build: {
        lib: {
            entry: 'src/index.js',
            name: 'JSHelpers',
            fileName: 'js-helpers',
            formats: ['es', 'umd'],
        }
    }
});