import { TEAM_OWNER, TEAM_BILLING, TEAM_MEMBER } from './teamRoles.js'

// Role dependency configuration - defines which roles can access what
export const roleHierarchy = {
  [TEAM_OWNER]: [TEAM_OWNER, TEAM_BILLING, TEAM_MEMBER],
  [TEAM_BILLING]: [TEAM_BILLING],
  [TEAM_MEMBER]: [TEAM_MEMBER]
}

/**
 * Checks if a user has access to a team based on their role
 *
 * @param {Object} team - The team object containing members
 * @param {String} uid - The user ID to check access for
 * @param {Boolean|String|Array|null} [roles] - The role(s) required for access:
 *   - null/undefined/false/true: any team member has access
 *   - String: specific role required
 *   - Array: any of the listed roles grants access
 * @param {Boolean} isAdmin - Whether the user is an admin (optional)
 * @returns {Boolean} - Whether the user has access
 */
export function canAccessTeam (team, uid, roles, isAdmin = false) {
  // Admin always has access
  if (isAdmin) return true

  // No team or invalid team, no access
  if (!team || !team.members) return false

  // Get user's role in the team
  const userRole = team.members[uid]?.role

  // If user is not a team member
  if (!userRole) return false

  // If roles is true, any team membership grants access
  if (!roles || roles === true) return true

  // If roles is a string (single role), check if user has the role or can access it via hierarchy
  if (typeof roles === 'string') {
    // Check if user's role can access the required role
    return roleHierarchy[userRole]?.includes(roles) || false
  }

  // If roles is an array, check if user's role can access any of the required roles
  if (Array.isArray(roles)) {
    // Check each required role
    return roles.some(role => roleHierarchy[userRole]?.includes(role)) || false
  }

  // Default case: no access
  return false
}
