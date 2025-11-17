import { defineConfig } from 'vitest/config'
import { resolve } from 'path'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    test: {
        globals: true,
        environment: 'jsdom',
        maxWorkers: 1,
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html']
        }
    }
})
