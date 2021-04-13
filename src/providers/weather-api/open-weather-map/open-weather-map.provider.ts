import { IHttpClientProvider } from '../../http-client/http-client.protocol'
import { IWeather, IWeatherApi } from '../weather-api.protocol'
import { convertOpenWeatherMapToWeather } from './helper'
import { IOpenWeatherMapConfig, IOpenWeatherMapConfigDto } from './open-weather-map.protocols'

export class OpenWeatherMapProvider implements IWeatherApi {
  private static instance: OpenWeatherMapProvider
  private readonly url: string
  private readonly httpClientProvider:IHttpClientProvider

  private constructor (config:IOpenWeatherMapConfig, httpClientProvider:IHttpClientProvider) {
    const { defaultRouter, appId, units, lang } = config
    this.url = `${defaultRouter}?appid=${appId}&units=${units}&lang=${lang}`
    this.httpClientProvider = httpClientProvider
  }

  static getInstance = (config: IOpenWeatherMapConfig, httpClientProvider:IHttpClientProvider): OpenWeatherMapProvider => {
    if (!OpenWeatherMapProvider.instance) OpenWeatherMapProvider.instance = new OpenWeatherMapProvider(config, httpClientProvider)
    return OpenWeatherMapProvider.instance
  }

  getByCityName = async (city: string): Promise<IWeather | undefined> => {
    try {
      const { data } = await this.httpClientProvider.get({ url: `${this.url}&q=${city}` })
      return convertOpenWeatherMapToWeather(data as IOpenWeatherMapConfigDto)
    } catch (error) {
      if (error.response.status === 404) return
      throw new Error(error.stack)
    }
  }
}
