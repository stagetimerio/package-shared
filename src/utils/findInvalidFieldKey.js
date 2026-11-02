import _isPlainObject from 'lodash/isPlainObject'
import { isValidFieldKey } from './isValidFieldKey.js'

/**
 * Finds the first key that `isValidFieldKey` refuses, at any depth of objects and arrays.
 *
 * @param {unknown} value
 * @returns {string|undefined} undefined when all keys are valid
 */
export function findInvalidFieldKey (value) {
  if (Array.isArray(value)) {
    for (const item of value) {
      const invalid = findInvalidFieldKey(item)
      if (invalid !== undefined) return invalid
    }
    return undefined
  }
  if (!_isPlainObject(value)) return undefined
  for (const [key, child] of Object.entries(value)) {
    if (!isValidFieldKey(key)) return key
    const invalid = findInvalidFieldKey(child)
    if (invalid !== undefined) return invalid
  }
  return undefined
}

