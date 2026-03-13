/**
 * Compare two semver version strings.
 *
 * Returns a negative number if a < b, zero if equal, positive if a > b.
 * Works like Array.sort comparator — use directly in .sort() calls.
 *
 * @param {string} a - First version string (e.g. '3.4.1')
 * @param {string} b - Second version string (e.g. '3.5.0')
 * @returns {number} Negative if a < b, 0 if equal, positive if a > b
 *
 * @example
 * compareVersions('3.4.1', '3.5.0')  // → negative
 * compareVersions('3.5.0', '3.5.0')  // → 0
 * compareVersions('3.5.0', '3.4.1')  // → positive
 * versions.sort((a, b) => compareVersions(b, a))  // descending
 */
export function compareVersions (a, b) {
  const pa = a.split('.').map(Number)
  const pb = b.split('.').map(Number)
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const na = pa[i] || 0
    const nb = pb[i] || 0
    if (na !== nb) return na - nb
  }
  return 0
}
