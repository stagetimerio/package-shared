const RESERVED_KEYS = new Set(['__proto__', 'constructor', 'prototype'])
// eslint-disable-next-line no-control-regex
const FORBIDDEN_CHARS = /[\x00-\x1F\x7F[\]]/

/**
 * Whether a key can go into a timer's custom fields. MongoDB refuses keys that start with `$`,
 * contain `.` or contain a null byte. The reserved keys can change an object prototype.
 * Brackets delimit the key in a `$CURRENT_FIELD[key]` placeholder.
 *
 * @param {string} key
 * @returns {boolean}
 */
export function isValidFieldKey (key) {
  return Boolean(key) &&
    key === key.trim() &&
    !key.startsWith('$') &&
    !key.includes('.') &&
    !FORBIDDEN_CHARS.test(key) &&
    !RESERVED_KEYS.has(key)
}
