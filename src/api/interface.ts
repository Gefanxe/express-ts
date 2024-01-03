export interface Response<TData = any, TError = any> {
    data?: TData
    error?: TError
    meta?: {
        currentPage: number
        lastPage: number
        pageSize: number
        total: Number
    }
}

export interface LineVerify {
    scope: string,
    client_id: string,
    expires_in: number
}

export type LineVerifyResponse = Response<LineVerify>;