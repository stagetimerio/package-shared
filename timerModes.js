export const COUNTDOWN = 'COUNTDOWN'
export const COUNTUP = 'COUNTUP'
export const TOD = 'TOD'
export const COUNTDOWN_TOD = 'COUNTDOWN_TOD'
export const COUNTUP_TOD = 'COUNTUP_TOD'
export const HIDDEN = 'HIDDEN'

export const modes = { COUNTDOWN, COUNTUP, TOD, COUNTDOWN_TOD, COUNTUP_TOD, HIDDEN }

export const isCountdown = val => [COUNTDOWN, COUNTDOWN_TOD].includes(val)
export const isCountup = val => [COUNTUP, COUNTUP_TOD].includes(val)

export default {
  ...modes,
  isCountdown,
  isCountup,
}
