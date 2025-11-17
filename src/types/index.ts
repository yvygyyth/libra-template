/**
 * 通用类型定义
 */

/**
 * 深度部分类型
 */
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * 深度只读类型
 */
export type DeepReadonly<T> = {
    readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P]
}

/**
 * 可为空的类型
 */
export type Nullable<T> = T | null | undefined

/**
 * 函数类型
 */
export type Fn<T = void> = () => T
export type AnyFn = (...args: unknown[]) => unknown

/**
 * 键值对类型
 */
export type KeyValue<K extends string | number | symbol = string, V = unknown> = Record<K, V>

/**
 * 提取 Promise 返回值类型
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T

/**
 * 数组元素类型
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never
