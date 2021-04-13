import { IWeather, IWeatherApi } from '../../providers/weather-api/weather-api.protocol'
import { RequestLogQueueService } from '../../shared/services/queue/request-log/request-log-queue.service'
import { IService } from '../../shared/services/service.protocol'
import { IGetCitiesWeatherDTO } from './get-cities-weather.dto'

export class GetCitiesWeatherService implements IService<IGetCitiesWeatherDTO, IWeather[]> {
  private readonly weatherApiProvider:IWeatherApi
  private readonly requestLogQueueService:RequestLogQueueService

  constructor (weatherApiProvider:IWeatherApi, requestLogQueueService:RequestLogQueueService) {
    this.weatherApiProvider = weatherApiProvider
    this.requestLogQueueService = requestLogQueueService
  }

  execute = async ({ cities }: IGetCitiesWeatherDTO): Promise<IWeather[]> => {
    const promises = cities.map(city => this.weatherApiProvider.getByCityName(city))
    const weatherCities = await Promise.all(promises)
    await this.requestLogQueueService.execute({
      service: 'getCitiesWeather',
      msg: cities.toString(),
      date: new Date().toISOString()
    })
    return weatherCities.filter(weatherCity => weatherCity !== undefined)
  }
}
