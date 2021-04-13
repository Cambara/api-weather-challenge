import { Job, DoneCallback } from 'bull'
import { IRequestLogQueue } from './request-log-queue.dto'
import * as fs from 'fs'

const filePath = './request-log.log'

export const requestLogQueueJob = (job:Job<IRequestLogQueue>, done:DoneCallback):void => {
  try {
    const { service, msg, date } = job.data
    const log = `${service} - ${msg} - ${date}\n`

    const isFile = fs.existsSync(filePath)

    if (!isFile) {
      fs.writeFileSync(filePath, log)
      return done()
    }

    fs.appendFileSync(filePath, log)
    done()
  } catch (error) {
    console.log(error)
  }
}
