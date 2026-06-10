import {
  ADMIN_ACCESS_LEVEL,
  NONE_ACCESS_LEVEL,
  READ_ACCESS_LEVEL,
  ACCESS_LEVEL_RANK,
  WRITE_ACCESS_LEVEL,
} from '../consts/folderAccess.js'

const folderAccessValues = [NONE_ACCESS_LEVEL, READ_ACCESS_LEVEL, WRITE_ACCESS_LEVEL, ADMIN_ACCESS_LEVEL]

export function normalizeFolderAccess(access) {
  if (access === null || access === undefined || access === '') return null
  if (folderAccessValues.includes(access)) return access
  return null
}

export function canAccessFolder(actual, required) {
  if (!folderAccessValues.includes(actual) || !folderAccessValues.includes(required)) {
    return false
  }

  const actualRank = ACCESS_LEVEL_RANK[actual] ?? 0
  const requiredRank = ACCESS_LEVEL_RANK[required] ?? 0

  return actualRank >= requiredRank
}

export function canWriteFolder(access) {
  return canAccessFolder(access, WRITE_ACCESS_LEVEL)
}

export function canAdminFolder(access) {
  return canAccessFolder(access, ADMIN_ACCESS_LEVEL)
}

export function normalizeFolderId(folderId) {
  if (Array.isArray(folderId)) {
    folderId = folderId[0]
  }

  if (folderId === null || folderId === undefined) {
    return null
  }

  const normalizedFolderId = String(folderId).trim()

  if (!normalizedFolderId || normalizedFolderId === 'root' || normalizedFolderId === 'null') {
    return null
  }

  return normalizedFolderId
}

