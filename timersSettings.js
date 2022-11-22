import { CONTINUE } from './timerBehaviors.js'
import { HHMMSS } from './countdownFormats.js'
import { AUTO } from './todFormats.js'

export const countdownFormat = { type: String, default: HHMMSS }
export const todFormat = { type: String, default: AUTO }
export const behavior = { type: String, default: CONTINUE }

export default {
  countdownFormat,
  todFormat,
  behavior,
}
