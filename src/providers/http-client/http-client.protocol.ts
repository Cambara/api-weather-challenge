export interface IHttpClientRequestParameters {
  url: string
  token?: string
  config?: {
    headers?: {
      'Authorization'?: string
      'user_key'?: string
      'Accept'?: string
      'Access-Control-Allow-Origin'?: string
      'Content-Type'?: string
    }
  }
}

export interface IHttpClientProvider {
  get<T>(parameters: IHttpClientRequestParameters): Promise<T>
}
