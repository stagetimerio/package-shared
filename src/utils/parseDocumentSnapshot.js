/**
 * Check if a value is a valid Date object
 * @param {any} date
 * @returns {boolean}
 */
function isValidDate (date) {
  return date instanceof Date && !isNaN(date)
}

/**
 * Parse a Firebase Timestamp or date string to a Date object
 * @param {any} date
 * @returns {Date|null}
 */
function parseFirebaseDate (date) {
  if (!date) return null
  if (isValidDate(date)) return date
  if (typeof date.toDate === 'function') return date.toDate()
  if (!isNaN(Date.parse(date))) return new Date(date)
  return date
}

/**
 * Parse a Firestore DocumentSnapshot to a plain object with id and timestamps
 *
 * @param {import('firebase-admin/firestore').DocumentSnapshot} snapshot - The Firestore document snapshot
 * @param {Object} [options] - Options for parsing
 * @param {Record<string, any>} [options.overwrite={}] - Properties to overwrite in the result
 * @param {string[]} [options.dateKeys=[]] - Keys to parse as dates
 * @returns {Object|null} The parsed document object, or null if document doesn't exist
 *
 * @example
 * const doc = await firestore.collection('users').doc('123').get()
 * const user = parseDocumentSnapshot(doc)
 * // { id: '123', name: '...', createdAt: Date, updatedAt: Date }
 *
 * @example
 * const doc = await firestore.collection('subscriptions').doc('sub_123').get()
 * const sub = parseDocumentSnapshot(doc, { dateKeys: ['created', 'updated'] })
 * // { id: 'sub_123', created: Date, updated: Date, createdAt: Date, updatedAt: Date }
 */
export function parseDocumentSnapshot (
  snapshot,
  {
    overwrite = {},
    dateKeys = [],
  } = {},
) {
  if (!snapshot.exists) return null
  const data = snapshot.data()
  for (const key of dateKeys) {
    data[key] = parseFirebaseDate(data?.[key])
  }
  return {
    id: snapshot.id,
    ...data,
    ...overwrite,
    createdAt: snapshot.createTime?.toDate(),
    updatedAt: snapshot.updateTime?.toDate(),
  }
}
