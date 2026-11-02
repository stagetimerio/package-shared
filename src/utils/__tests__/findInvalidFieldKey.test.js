import { expect, test, describe } from 'vitest'
import { isValidFieldKey } from '../isValidFieldKey.js'
import { findInvalidFieldKey } from '../findInvalidFieldKey.js'

describe('isValidFieldKey', () => {
  test.each(['vlc', 'vt_image', 'a-b', 'Ü', 'price$', 'VT image', 'Presenter\'s name', '🎬'])('accepts %j', (key) => {
    expect(isValidFieldKey(key)).toBe(true)
  })

  test.each(['', '$set', 'a.b', '__proto__', 'constructor', 'prototype', ' vlc', 'vlc ', 'a\u0000b', 'a\nb', 'a\tb', 'a[b', 'a]b'])('refuses %j', (key) => {
    expect(isValidFieldKey(key)).toBe(false)
  })
})

describe('findInvalidFieldKey', () => {
  test('returns undefined when all keys are valid', () => {
    expect(findInvalidFieldKey({ vlc: 14, slides: [{ name: 'Intro' }], price: '$1.50' })).toBeUndefined()
  })

  test.each([
    ['top level', '{"a.b":1}', 'a.b'],
    ['nested in object', '{"a":{"$gt":1}}', '$gt'],
    ['nested in array', '{"a":[{"b":[{"$gt":1}]}]}', '$gt'],
    ['__proto__', '{"__proto__":{"x":1}}', '__proto__'],
    ['empty', '{"":1}', ''],
  ])('finds the key: %s', (_name, json, key) => {
    expect(findInvalidFieldKey(JSON.parse(json))).toBe(key)
  })

  test.each([[null], [3], ['text'], [[1, 2]]])('returns undefined for %j', (value) => {
    expect(findInvalidFieldKey(value)).toBeUndefined()
  })
})

