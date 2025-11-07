/**
 * 浏览器 API 测试示例
 * 展示如何在 Vitest 中测试浏览器环境相关的功能
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

describe('Browser API Tests', () => {
    beforeEach(() => {
        // 每个测试前清理 DOM
        document.body.innerHTML = ''
    })

    afterEach(() => {
        // 每个测试后清理 localStorage
        localStorage.clear()
        sessionStorage.clear()
    })

    describe('DOM API', () => {
        it('should create and append element', () => {
            const div = document.createElement('div')
            div.id = 'test-div'
            div.textContent = 'Hello World'
            document.body.appendChild(div)

            const element = document.getElementById('test-div')
            expect(element).not.toBeNull()
            expect(element?.textContent).toBe('Hello World')
        })

        it('should query elements by selector', () => {
            const div1 = document.createElement('div')
            div1.className = 'test-class'
            const div2 = document.createElement('div')
            div2.className = 'test-class'
            document.body.appendChild(div1)
            document.body.appendChild(div2)

            const elements = document.querySelectorAll('.test-class')
            expect(elements.length).toBe(2)
        })

        it('should handle events', () => {
            const button = document.createElement('button')
            let clicked = false
            button.addEventListener('click', () => {
                clicked = true
            })
            document.body.appendChild(button)

            button.click()
            expect(clicked).toBe(true)
        })
    })

    describe('Storage API', () => {
        it('should use localStorage', () => {
            localStorage.setItem('test-key', 'test-value')
            expect(localStorage.getItem('test-key')).toBe('test-value')
            expect(localStorage.length).toBe(1)

            localStorage.removeItem('test-key')
            expect(localStorage.getItem('test-key')).toBeNull()
        })

        it('should use sessionStorage', () => {
            sessionStorage.setItem('session-key', 'session-value')
            expect(sessionStorage.getItem('session-key')).toBe('session-value')

            sessionStorage.clear()
            expect(sessionStorage.length).toBe(0)
        })
    })

    describe('Window API', () => {
        it('should access window object', () => {
            expect(window).toBeDefined()
            expect(window.document).toBe(document)
        })

        it('should use requestAnimationFrame', () => {
            return new Promise<void>((resolve) => {
                const startTime = Date.now()
                window.requestAnimationFrame(() => {
                    const elapsed = Date.now() - startTime
                    expect(elapsed).toBeGreaterThanOrEqual(0)
                    resolve()
                })
            })
        })
    })

    describe('Fetch API', () => {
        it('should have fetch available', () => {
            expect(typeof fetch).toBe('function')
        })

        // 注意：实际测试 fetch 需要使用 mock 或真实服务器
        it('should mock fetch request', async () => {
            global.fetch = vi.fn(() =>
                Promise.resolve({
                    ok: true,
                    json: () => Promise.resolve({ data: 'test' })
                } as Response)
            )

            const response = await fetch('/api/test')
            const data = await response.json()
            expect(data).toEqual({ data: 'test' })
        })
    })
})
