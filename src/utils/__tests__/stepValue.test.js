import { expect, test, describe } from 'vitest'
import { stepValue } from '../stepValue.js'

describe('stepValue function', () => {
  // Basic functionality tests
  test('increments to next step when direction is up', () => {
    expect(stepValue(2.13, 0.05, 'up')).toBe(2.15)
    expect(stepValue(2.15, 0.05, 'up')).toBe(2.2)
    expect(stepValue(2.0, 0.05, 'up')).toBe(2.05)
  })

  test('decrements to previous step when direction is down', () => {
    expect(stepValue(2.13, 0.05, 'down')).toBe(2.1)
    expect(stepValue(2.15, 0.05, 'down')).toBe(2.1)
    expect(stepValue(2.0, 0.05, 'down')).toBe(1.95)
  })

  // Edge cases
  test('handles exact step values correctly', () => {
    expect(stepValue(2.15, 0.05, 'up')).toBe(2.2)
    expect(stepValue(2.15, 0.05, 'down')).toBe(2.1)
  })

  test('handles zero value correctly', () => {
    expect(stepValue(0, 0.05, 'up')).toBe(0.05)
    expect(stepValue(0, 0.05, 'down')).toBe(-0.05)
  })

  test('handles negative values correctly', () => {
    expect(stepValue(-2.13, 0.05, 'up')).toBe(-2.1)
    expect(stepValue(-2.13, 0.05, 'down')).toBe(-2.15)
  })

  // Min/Max constraints tests
  test('respects min constraint', () => {
    expect(stepValue(2.03, 0.05, 'down', { min: 2.0 })).toBe(2.0)
    expect(stepValue(1.98, 0.05, 'down', { min: 2.0 })).toBe(2.0)
  })

  test('respects max constraint', () => {
    expect(stepValue(2.98, 0.05, 'up', { max: 3.0 })).toBe(3.0)
    expect(stepValue(3.02, 0.05, 'up', { max: 3.0 })).toBe(3.0)
  })

  test('applies both min and max constraints', () => {
    expect(stepValue(1.98, 0.05, 'down', { min: 2.0, max: 3.0 })).toBe(2.0)
    expect(stepValue(3.02, 0.05, 'up', { min: 2.0, max: 3.0 })).toBe(3.0)
    expect(stepValue(2.5, 0.05, 'up', { min: 2.0, max: 3.0 })).toBe(2.55)
  })

  // Different step sizes
  test('works with different step sizes', () => {
    expect(stepValue(10.3, 0.1, 'up')).toBe(10.4)
    expect(stepValue(10.3, 0.1, 'down')).toBe(10.2)

    expect(stepValue(10.3, 0.25, 'up')).toBe(10.5)
    expect(stepValue(10.3, 0.25, 'down')).toBe(10.25)

    expect(stepValue(10.3, 1, 'up')).toBe(11)
    expect(stepValue(10.3, 1, 'down')).toBe(10)
  })

  // Precision handling tests
  test('handles floating point precision issues', () => {
    // 0.1 + 0.2 normally equals 0.30000000000000004 in JS
    expect(stepValue(0.1 + 0.2, 0.1, 'up')).toBe(0.4)
    expect(stepValue(0.1 + 0.2, 0.1, 'down')).toBe(0.2)
  })

  test('works with custom precision', () => {
    expect(stepValue(0.12345, 0.001, 'up', { precision: 5 })).toBe(0.124)
    expect(stepValue(0.12345, 0.001, 'down', { precision: 5 })).toBe(0.123)
  })

  // Error cases
  test('throws error for invalid values', () => {
    expect(() => stepValue(NaN, 0.5, 'up')).toThrow('Value must be a number')
    expect(() => stepValue('', 0.5, 'up')).toThrow('Value must be a number')
    expect(() => stepValue({}, 0.5, 'up')).toThrow('Value must be a number')
    expect(() => stepValue([], 0.5, 'up')).toThrow('Value must be a number')
  })

  test('throws error for invalid step values', () => {
    expect(() => stepValue(2.13, 0, 'up')).toThrow('Step must be a positive number')
    expect(() => stepValue(2.13, -0.05, 'up')).toThrow('Step must be a positive number')
  })

  test('throws error for invalid direction', () => {
    expect(() => stepValue(2.13, 0.05, 'invalid')).toThrow('Direction must be "up" or "down"')
  })
})
