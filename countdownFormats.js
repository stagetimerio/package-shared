export const MMMSSF = 'MMMSSF'
export const MMMSS = 'MMMSS'
export const HHMMSSF = 'HHMMSSF'
export const HHMMSS = 'HHMMSS'
export const DHMS = 'DHMS'
export const DHHMMSSF = 'DHHMMSSF'
export const DHHMMSS = 'DHHMMSS'

export const countdownFormats = { MMMSSF, MMMSS, HHMMSSF, HHMMSS, DHMS, DHHMMSSF, DHHMMSS }
export const DEFAULT_COUNTDOWN_FORMAT = HHMMSS

export const withDecimals = val => [MMMSSF, HHMMSSF, DHHMMSSF].includes(val)
export const withHours = val => [HHMMSSF, HHMMSS, DHMS, DHHMMSSF, DHHMMSS].includes(val)
export const withDays = val => [DHMS, DHHMMSSF, DHHMMSS].includes(val)

export default {
  ...countdownFormats,
  DEFAULT_COUNTDOWN_FORMAT,
  countdownFormats,
  withDecimals,
  withHours,
  withDays,
}
