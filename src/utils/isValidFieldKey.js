const RESERVED_KEYS = new Set(['__proto__', 'constructor', 'prototype'])

/**
 * Whether a key can go into a timer's custom fields. MongoDB refuses keys that start with `$`
 * or contain `.`, and the reserved keys can change an object prototype.
 *
 * @param {string} key
 * @returns {boolean}
 */
export function isValidFieldKey (key) {
  return Boolean(key) && !key.startsWith('$') && !key.includes('.') && !RESERVED_KEYS.has(key)
}

