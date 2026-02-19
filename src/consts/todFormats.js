export const AUTO = 'AUTO'
export const AUTO_HHMM = 'AUTO_HHMM'
export const HHMMSS = 'H:mm:ss'
export const HHMM = 'H:mm'
export const HHMMSS_AM = 'h:mm:ss aa'
export const HHMM_AM = 'h:mm aa'
export const HHMMSS_12H = 'h:mm:ss'
export const HHMM_12H = 'h:mm'

export const DEFAULT_H12 = HHMMSS_AM
export const DEFAULT_H24 = HHMMSS
export const DEFAULT_H12_HHMM = HHMM_AM
export const DEFAULT_H24_HHMM = HHMM

export const isH12 = (todFormat) => [HHMMSS_AM, HHMM_AM, HHMMSS_12H, HHMM_12H].includes(todFormat)
export const isH24 = (todFormat) => [HHMMSS, HHMM].includes(todFormat)

export const resolve = (todFormat, hour12) => {
  if (todFormat === AUTO) return hour12 ? DEFAULT_H12 : DEFAULT_H24
  if (todFormat === AUTO_HHMM) return hour12 ? DEFAULT_H12_HHMM : DEFAULT_H24_HHMM
  return todFormat
}

export const formats = { AUTO, AUTO_HHMM, HHMMSS, HHMM, HHMMSS_AM, HHMM_AM, HHMMSS_12H, HHMM_12H }
