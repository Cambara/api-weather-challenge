import 'dotenv/config'
import env from './shared/helpers/env.helper'
import { app } from './http/app'

app.listen(env.port, () => console.log(`Server running on port ${env.port}`))
