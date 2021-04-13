import { Job, DoneCallback } from 'bull'
import { IRequestLogQueue } from './request-log-queue.dto'
import * as fs from 'fs'

const filePath = './request-log.log'

export const requestLogQueueJob = (job:Job<IRequestLogQueue>, done:DoneCallback):void => {
  try {
    const isFile = fs.existsSync(filePath)
    const { service, msg, date } = job.data
    const log = `${service} - ${msg} - ${date}\n`

    if (!isFile) {
      fs.writeFileSync(filePath, log)
      return done()
    }
    const file = fs.readFileSync(filePath)
    fs.writeFileSync(filePath, `${file}${log}`)
    done()
  } catch (error) {
    console.log(error)
  }
}
