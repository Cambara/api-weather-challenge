import { IService } from '../service.protocol'
import { IValidatorDTO } from './validator.dto'

export class ValidatorService implements IService<IValidatorDTO, unknown> {
  execute = async <T>({ schema, params }: IValidatorDTO): Promise<T | string[]> => {
    try {
      const validatedParams = await schema.validate(params, {
        abortEarly: false,
        stripUnknown: true
      })
      if (!validatedParams) throw new Error('Invalid object')
      const obj = validatedParams as unknown as T
      return obj
    } catch ({ errors: errorsSchema }) {
      return errorsSchema as string[]
    }
  }
}
