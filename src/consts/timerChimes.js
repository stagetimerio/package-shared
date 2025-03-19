export const NONE = 'NONE'
export const BELL = 'BELL'
export const DING = 'DING'
export const BEEP = 'BEEP'
export const BUZZER = 'BUZZER'
export const GONG = 'GONG'
export const WINDCHIME = 'WINDCHIME'
export const SHIPBELL = 'SHIPBELL'
export const SHIPHORNSINGLE = 'SHIPHORNSINGLE'
export const SHIPHORNDOUBLE = 'SHIPHORN' // for legacy reasons
export const ITSTIME = 'ITSTIME'
export const SILENCE = 'SILENCE'

export const chimes = { NONE, BELL, DING, WINDCHIME, BEEP, BUZZER, GONG, SHIPBELL, SHIPHORNSINGLE, SHIPHORNDOUBLE, ITSTIME, SILENCE }

export default { ...chimes }
