import { IController } from '../../shared/controllers/controller.protocol'
import { Request, Response } from 'express'
import { badRequest, internalErrorRequest, successRequest } from '../../shared/helpers/http-response.helper'
import { ValidatorService } from '../../shared/services/validator/validator.service'
import { getCitiesWeatherValidator } from './get-cities-weather.validator'
import { GetCitiesWeatherService } from './get-cities-weather.service'
import { IGetCitiesWeatherDTO } from './get-cities-weather.dto'

export class GetCitiesWeatherController implements IController {
  private readonly validatorService:ValidatorService
  private readonly getCitiesWeatherService:GetCitiesWeatherService

  constructor (validatorService:ValidatorService, getCitiesWeatherService:GetCitiesWeatherService) {
    this.validatorService = validatorService
    this.getCitiesWeatherService = getCitiesWeatherService
  }

  handle = async (request: Request, response: Response):Promise<Response> => {
    try {
      const params = await this.validatorService.execute<IGetCitiesWeatherDTO>({
        params: request.query,
        schema: getCitiesWeatherValidator()
      })

      if (typeof params !== 'object' || Array.isArray(params)) return badRequest(params, response)
      const cities = params.cities.filter(city => city && city.trim() !== '')

      if (cities.length < 1) return badRequest(['cities must be a valid array'], response)

      const weatherCities = await this.getCitiesWeatherService.execute({ cities })

      return successRequest({ weatherCities }, response)
    } catch (error) {
      return internalErrorRequest(error, response)
    }
  }
}
