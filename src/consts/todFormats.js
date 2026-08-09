// Concrete formats are date-fns format strings, named after their own tokens:
// `H` = unpadded hour, `HH` = zero-padded, `_AM`/`_12H` = the 12-hour variants.
// AUTO/AUTO_HHMM are sentinels resolved against the browser locale — their
// values are persisted in room and output settings, so they must not change.
export const AUTO = 'AUTO'
export const AUTO_HHMM = 'AUTO_HHMM'
export const HMMSS = 'H:mm:ss'
export const HMM = 'H:mm'
export const HHMMSS = 'HH:mm:ss'
export const HHMM = 'HH:mm'
export const HMMSS_AM = 'h:mm:ss aa'
export const HMM_AM = 'h:mm aa'
export const HMMSS_12H = 'h:mm:ss'
export const HMM_12H = 'h:mm'

export const DEFAULT_H12 = HMMSS_AM
export const DEFAULT_H24 = HMMSS
export const DEFAULT_H12_HHMM = HMM_AM
export const DEFAULT_H24_HHMM = HMM

export const isH12 = (todFormat) => [HMMSS_AM, HMM_AM, HMMSS_12H, HMM_12H].includes(todFormat)
export const isH24 = (todFormat) => [HMMSS, HMM, HHMMSS, HHMM].includes(todFormat)

export const resolve = (todFormat, hour12) => {
  if (todFormat === AUTO) return hour12 ? DEFAULT_H12 : DEFAULT_H24
  if (todFormat === AUTO_HHMM) return hour12 ? DEFAULT_H12_HHMM : DEFAULT_H24_HHMM
  return todFormat
}

export const formats = { AUTO, AUTO_HHMM, HMMSS, HMM, HHMMSS, HHMM, HMMSS_AM, HMM_AM, HMMSS_12H, HMM_12H }
