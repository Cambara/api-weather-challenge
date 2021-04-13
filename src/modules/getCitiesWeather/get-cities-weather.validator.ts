import { object, ObjectSchema, array, string } from 'yup'

export const getCitiesWeatherValidator = ():ObjectSchema => {
  return object({
    cities: array().of(string()).min(1).max(10).nullable().required()
  })
}
