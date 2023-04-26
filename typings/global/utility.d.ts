type ValueOf<T> = T[keyof T]

/** 将某些字段变成 optional 可选 */
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

/** 将某些字段变成 required 必填 */
type RequiredSection<T extends object, K extends keyof T> = Omit<T, K> &
    Required<Pick<T, K>>

/** 获得函数的返回值类型，兼容 Promise 的返回值，区分 ReturnType */
type Unwrap<T> = T extends Promise<infer U>
    ? U
    : T extends (...args: any) => Promise<infer U>
    ? U
    : T extends (...args: any) => infer U
    ? U
    : T
