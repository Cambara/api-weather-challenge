import * as Queue from 'bull'
import env from './env.helper'

export interface ICreateQueueDto {
  name: string
  job: Queue.ProcessCallbackFunction<unknown>
}

export const createQueue = ({ name, job }:ICreateQueueDto):Queue.Queue => {
  const queue = new Queue(name, env.queueRedisHost)
  queue.process(job)
  return queue
}
