import { Router } from 'express'
import { getCitiesWeatherController } from '../modules'

const router = Router()

router.get('/', (request, response) => response.status(200).send())

router.get('/health', (request, response) => response.status(200).send())

router.get('/get-weather', getCitiesWeatherController.handle)

export { router }
