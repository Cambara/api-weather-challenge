import { IHttpClientProvider, IHttpClientRequestParameters } from './http-client.protocol'
import axios from 'axios'

export class AxiosHttpClientProvider implements IHttpClientProvider {
  private static instance: AxiosHttpClientProvider
  private defaultHeaders: unknown

  private constructor () {
    this.defaultHeaders = {
      Accept: 'application/json'
    }
  }

  static getInstance = (): AxiosHttpClientProvider => {
    if (!AxiosHttpClientProvider.instance) AxiosHttpClientProvider.instance = new AxiosHttpClientProvider()
    return AxiosHttpClientProvider.instance
  }

  get = async <T>({ url, config }: IHttpClientRequestParameters): Promise<T> => {
    const configuration = config || {}

    configuration.headers = config?.headers ? Object.assign(this.defaultHeaders, config.headers) : this.defaultHeaders
    return axios.get<unknown, T>(url, configuration)
  }
}
