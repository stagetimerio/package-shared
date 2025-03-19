import _clamp from 'lodash/clamp'

/**
 * Increments or decrements a value to the next multiple of step
 *
 * @param {number} value - The current value
 * @param {number} step - The step size (e.g., 0.05)
 * @param {string} direction - 'up' or 'down' to specify the direction
 * @param {Object} [options={}] - Additional options
 * @param {number} [options.min=null] - Minimum allowed value
 * @param {number} [options.max=null] - Maximum allowed value
 * @param {number} [options.precision=10] - Decimal precision to handle floating point issues
 * @returns {number} The value adjusted to the next step
 */
export function stepValue (value, step, direction, options = {}) {
  const { min = null, max = null, precision = 10 } = options
  // Handle invalid step values
  if (step <= 0) {
    throw new Error('Step must be a positive number')
  }

  // Calculate how many steps we're already at
  const factor = Math.pow(10, precision)
  const roundedValue = Math.round(value * factor) / factor
  const roundedStep = Math.round(step * factor) / factor

  // Calculate the current number of steps (floored)
  const steps = Math.floor(roundedValue / roundedStep)

  // Calculate the remainder (how far past the last step we are)
  const remainder = (roundedValue - steps * roundedStep) / roundedStep

  // Determine the target step count based on direction and remainder
  let targetSteps = steps
  if (direction === 'up') {
    // If we're already exactly on a step and need to go up, add 1 step
    // Otherwise go to the next step
    targetSteps = remainder < Number.EPSILON ? steps + 1 : steps + 1
  } else if (direction === 'down') {
    // If we're already exactly on a step and need to go down, subtract 1 step
    // Otherwise go to the current step (floor)
    targetSteps = remainder < Number.EPSILON ? steps - 1 : steps
  } else {
    throw new Error('Direction must be "up" or "down"')
  }

  // Calculate the new value
  let newValue = targetSteps * step

  // Round to handle floating point precision issues
  newValue = Math.round(newValue * factor) / factor

  // Apply min/max constraints if provided
  if (min !== null || max !== null) {
    newValue = _clamp(newValue, min !== null ? min : -Infinity, max !== null ? max : Infinity)
  }

  return newValue
}

// Example usage:
// const value = 2.13
// const STEP = 0.05
// const newValueUp = stepValue(value, STEP, 'up')     // Returns 2.15
// const newValueDown = stepValue(value, STEP, 'down') // Returns 2.10
// const boundedValue = stepValue(value, STEP, 'up', { min: 2.0, max: 3.0 }) // Returns 2.15
