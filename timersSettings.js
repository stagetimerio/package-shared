import { CONTINUE } from './timerBehaviors.js'
import { HHMMSS } from './countdownFormats.js'
import { AUTO } from './todFormats.js'

export default {
  countdownFormat: { type: String, default: HHMMSS },
  todFormat: { type: String, default: AUTO },
  behavior: { type: String, default: CONTINUE },
}
