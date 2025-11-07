import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'LibraTemplate',
            formats: ['es', 'cjs', 'umd'],
            fileName: (format: string) => {
                if (format === 'es') return 'index.esm.js'
                if (format === 'cjs') return 'index.js'
                return `index.${format}.js`
            }
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: [],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {}
            }
        },
        sourcemap: true,
        // 清空输出目录
        emptyOutDir: true
    },
    plugins: [
        dts({
            insertTypesEntry: true, // 自动生成 types entry
            rollupTypes: true // 打包时生成类型文件
        })
    ]
})
