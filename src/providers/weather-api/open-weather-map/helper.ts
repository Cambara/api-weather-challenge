import { IWeather } from '../weather-api.protocol'
import { IOpenWeatherMapConfigDto } from './open-weather-map.protocols'

export const convertOpenWeatherMapToWeather = (data: IOpenWeatherMapConfigDto):IWeather => {
  return {
    city: data.name,
    temp: data.main.temp,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_min,
    sunrise: data.sys.sunrise + data.timezone,
    sunset: data.sys.sunset + data.timezone
  }
}
