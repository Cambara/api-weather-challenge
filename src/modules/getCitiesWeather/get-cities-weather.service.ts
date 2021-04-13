import { IWeather, IWeatherApi } from '../../providers/weather-api/weather-api.protocol'
import { IService } from '../../shared/services/service.protocol'
import { IGetCitiesWeatherDTO } from './get-cities-weather.dto'

export class GetCitiesWeatherService implements IService<IGetCitiesWeatherDTO, IWeather[]> {
  private readonly weatherApiProvider:IWeatherApi

  constructor (weatherApiProvider:IWeatherApi) {
    this.weatherApiProvider = weatherApiProvider
  }

  execute = async ({ cities }: IGetCitiesWeatherDTO): Promise<IWeather[]> => {
    const promises = cities.map(city => this.weatherApiProvider.getByCityName(city))
    const weatherCities = await Promise.all(promises)
    return weatherCities.filter(weatherCity => weatherCity !== undefined)
  }
}
