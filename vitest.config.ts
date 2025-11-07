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
        // 配置 jsdom 环境选项，支持更多浏览器 API
        environmentOptions: {
            jsdom: {
                // 启用更多浏览器 API
                url: 'http://localhost',
                referrer: 'http://localhost',
                contentType: 'text/html',
                includeNodeLocations: true,
                storageQuota: 10000000
            }
        },
        // 设置文件，用于初始化浏览器环境
        setupFiles: ['./tests/setup.ts'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html']
        }
    }
})
