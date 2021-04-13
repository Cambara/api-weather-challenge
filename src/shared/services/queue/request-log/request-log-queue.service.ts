import { IService } from '../../service.protocol'
import { Queue } from 'bull'
import { IRequestLogQueue } from './request-log-queue.dto'

export class RequestLogQueueService implements IService<IRequestLogQueue, boolean> {
  private readonly queue: Queue

  constructor (queue: Queue) {
    this.queue = queue
  }

  execute = async (dto: IRequestLogQueue): Promise<boolean> => {
    this.queue.add(dto)
    return Promise.resolve(true)
  }
}
