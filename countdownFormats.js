export const DHHMMSS = 'DHHMMSS'
export const DHHMMSSF = 'DHHMMSSF'
export const HHHMMSS = 'HHHMMSS' // HHMMSS
export const HHHMMSSF = 'HHHMMSSF' // HHMMSSF
export const MMMSS = 'MMMSS'
export const MMMSSF = 'MMMSSF'
export const SSS = 'SSS'
export const SSSF = 'SSSF'
export const L_DHMS = 'L_DHMS' // DHMS
export const L_HMS = 'L_HMS'
export const L_MS = 'L_MS'
export const L_S = 'L_S'

// Legacy
export const HHMMSS = 'HHMMSS'

export const countdownFormats = { DHHMMSS, DHHMMSSF, HHHMMSS, HHHMMSSF, MMMSS, MMMSSF, SSS, SSSF, L_DHMS, L_HMS, L_MS, L_S }
export const DEFAULT_COUNTDOWN_FORMAT = HHHMMSS

export default {
  ...countdownFormats,
  countdownFormats,
  DEFAULT_COUNTDOWN_FORMAT,
}
