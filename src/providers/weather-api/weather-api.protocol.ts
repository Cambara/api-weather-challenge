
export interface IWeather {
  city: string
  temp: number
  tempMin: number
  tempMax: number
  sunrise: number
  sunset: number
}

export interface IWeatherApi {
  getByCityName(city: string):Promise<IWeather | undefined>
}
