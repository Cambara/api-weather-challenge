import { OpenWeatherMapProvider } from './open-weather-map.provider'
import env from '../../../shared/helpers/env.helper'
import { AxiosHttpClientProvider } from '../../http-client/axios-http-client.provider'
import { IOpenWeatherMapConfig } from './open-weather-map.protocols'

const config:IOpenWeatherMapConfig = {
  defaultRouter: 'http://api.openweathermap.org/data/2.5/weather',
  appId: env.openWeatherMapAppId,
  lang: 'pt',
  units: 'metric'
}

const httpClientProvider = AxiosHttpClientProvider.getInstance()

const openWeatherMapProvider = OpenWeatherMapProvider.getInstance(config, httpClientProvider)

export { openWeatherMapProvider }
