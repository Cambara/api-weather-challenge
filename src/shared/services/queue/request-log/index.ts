import { createQueue } from '../../../helpers/queue.helper'
import { requestLogQueueJob } from './request-log-queue.job'
import { RequestLogQueueService } from './request-log-queue.service'

const queue = createQueue({ name: 'log-queue', job: requestLogQueueJob })
const requestLogQueueService = new RequestLogQueueService(queue)

export { requestLogQueueService }
