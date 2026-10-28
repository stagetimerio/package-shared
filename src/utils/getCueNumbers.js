/**
 * The cue number of every timer and group in a rundown, as the controller shows it:
 * a timer outside a group is `n`, a group is `n` and its timers `n.1`, `n.2`.
 * A heading without timers gets no number, and neither do End of Day markers.
 *
 * Reads the rundown as the database stores it: `{ _id, type, data }` entries,
 * where a `section-end` names its heading in `data.sectionId`.
 *
 * @param {Array<{_id: string, type: string, data?: object}>} rundown
 * @returns {Map<string, string>} cue number by entry `_id`
 *
 * @example
 * getCueNumbers([timer A, section G, timer B, timer C, section-end G, timer D])
 * // → A: '1', G: '2', B: '2.1', C: '2.2', D: '3'
 */
export function getCueNumbers (rundown = []) {
  const numbers = new Map()
  let top = 0
  let openSectionId = null
  let groupNumber = null
  let child = 0
  for (const entry of rundown) {
    if (entry.type === 'section') {
      openSectionId = String(entry._id)
      groupNumber = null
      continue
    }
    if (entry.type === 'section-end') {
      openSectionId = null
      continue
    }
    if (entry.type !== 'timer') continue
    if (!openSectionId) {
      top++
      numbers.set(String(entry._id), `${top}`)
      continue
    }
    if (groupNumber === null) {
      top++
      groupNumber = top
      child = 0
      numbers.set(openSectionId, `${groupNumber}`)
    }
    child++
    numbers.set(String(entry._id), `${groupNumber}.${child}`)
  }
  return numbers
}
