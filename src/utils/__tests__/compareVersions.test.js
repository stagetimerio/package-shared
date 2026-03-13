import { expect, test, describe } from 'vitest'
import { compareVersions } from '../compareVersions.js'

describe('compareVersions', () => {
  test('returns 0 for equal versions', () => {
    expect(compareVersions('1.0.0', '1.0.0')).toBe(0)
    expect(compareVersions('3.4.1', '3.4.1')).toBe(0)
  })

  test('returns negative when a < b', () => {
    expect(compareVersions('1.0.0', '2.0.0')).toBeLessThan(0)
    expect(compareVersions('3.4.1', '3.5.0')).toBeLessThan(0)
    expect(compareVersions('3.4.1', '3.4.2')).toBeLessThan(0)
  })

  test('returns positive when a > b', () => {
    expect(compareVersions('2.0.0', '1.0.0')).toBeGreaterThan(0)
    expect(compareVersions('3.5.0', '3.4.1')).toBeGreaterThan(0)
    expect(compareVersions('3.4.2', '3.4.1')).toBeGreaterThan(0)
  })

  test('handles different segment counts', () => {
    expect(compareVersions('1.0', '1.0.0')).toBe(0)
    expect(compareVersions('1.0.0', '1.0')).toBe(0)
    expect(compareVersions('1.0', '1.0.1')).toBeLessThan(0)
    expect(compareVersions('1.0.1', '1.0')).toBeGreaterThan(0)
  })

  test('compares major version before minor', () => {
    expect(compareVersions('2.0.0', '1.9.9')).toBeGreaterThan(0)
  })

  test('works as Array.sort comparator', () => {
    const versions = ['3.5.0', '3.4.1', '3.10.0', '3.4.2']
    const sorted = [...versions].sort(compareVersions)
    expect(sorted).toEqual(['3.4.1', '3.4.2', '3.5.0', '3.10.0'])
  })

  test('sorts descending when arguments are swapped', () => {
    const versions = ['3.5.0', '3.4.1', '3.10.0', '3.4.2']
    const sorted = [...versions].sort((a, b) => compareVersions(b, a))
    expect(sorted).toEqual(['3.10.0', '3.5.0', '3.4.2', '3.4.1'])
  })
})
