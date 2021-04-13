import { openWeatherMapProvider } from '../../providers/weather-api/open-weather-map'
import { validatorService } from '../../shared/services'
import { GetCitiesWeatherController } from './get-cities-weather.controller'
import { GetCitiesWeatherService } from './get-cities-weather.service'

const getCitiesWeatherService = new GetCitiesWeatherService(openWeatherMapProvider)
const getCitiesWeatherController = new GetCitiesWeatherController(validatorService, getCitiesWeatherService)

export { getCitiesWeatherController, getCitiesWeatherService }
