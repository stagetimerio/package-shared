import { CONTINUE } from './timerBehaviors.js'
import { HHMMSS } from './countdownFormats.js'
import { AUTO } from './todFormats.js'

export const timersSettings = {
  countdownFormat: { type: String, default: HHMMSS },
  todFormat: { type: String, default: AUTO },
  behavior: { type: String, default: CONTINUE },
}

export default timersSettings
