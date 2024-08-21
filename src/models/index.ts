export interface IBaseUrl {
    baseURL: string,
}

export interface IData {
    status: string,
}

export interface IJsonFetchResult {
    data: IData | undefined,
    loading: boolean,
    error: string,
}

export interface IOpts {
    method: string,
    content: {},
}