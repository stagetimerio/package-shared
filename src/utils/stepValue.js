import _clamp from 'lodash/clamp'
import _round from 'lodash/round'

/**
 * Increments or decrements a value to the next multiple of step
 *
 * @param {number} value - The current value
 * @param {number} step - The step size (e.g., 0.05)
 * @param {string} direction - 'up' or 'down' to specify the direction
 * @param {Object} [options={}] - Additional options
 * @param {number} [options.min] - Minimum allowed value
 * @param {number} [options.max] - Maximum allowed value
 * @param {number} [options.precision=2] - Decimal precision to handle floating point issues
 * @returns {number} The value adjusted to the next step
 */
export function stepValue (value, step, direction, { min, max, precision = 2 } = {}) {
  // Handle invalid inputs
  if (typeof value !== 'number' || isNaN(value)) throw new Error('Value must be a number')
  if (step <= 0) throw new Error('Step must be a positive number')
  if (!['up', 'down'].includes(direction)) throw new Error('Direction must be "up" or "down"')

  // Apply step to value
  const rounder = direction === 'up' ? Math.floor : Math.ceil
  const divider = _round(value / step, 1)
  const multiple = rounder(divider)
  let newValue = direction === 'up'
    ? (multiple + 1) * step
    : (multiple - 1) * step

  // Avoid floating point issues
  newValue = _clamp(newValue, min || -Infinity, max || Infinity)
  newValue = parseFloat(newValue.toFixed(precision))

  return newValue
}
