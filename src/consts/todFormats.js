export const AUTO = 'AUTO'
export const HHMMSS = 'H:mm:ss'
export const HHMM = 'H:mm'
export const HHMMSS_AM = 'h:mm:ss aa'
export const HHMM_AM = 'h:mm aa'
export const HHMMSS_12H = 'h:mm:ss'
export const HHMM_12H = 'h:mm'

export const DEFAULT_H12 = HHMMSS_AM
export const DEFAULT_H24 = HHMMSS

export const isH12 = (todFormat) => [HHMMSS_AM, HHMM_AM, HHMMSS_12H, HHMM_12H].includes(todFormat)
export const isH24 = (todFormat) => [HHMMSS, HHMM].includes(todFormat)

export const formats = { AUTO, HHMMSS, HHMM, HHMMSS_AM, HHMM_AM, HHMMSS_12H, HHMM_12H }
