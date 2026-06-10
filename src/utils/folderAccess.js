import { folderAccess } from '../consts/folderAccess.js'
import { folderAccessRank } from '../consts/folderAccess.js'

const folderAccessValues = Object.values(folderAccess)

export function normalizeFolderAccess(access) {
  if (access === null || access === undefined || access === '') return null
  if (folderAccessValues.includes(access)) return access
  return null
}

export function canAccessFolder(actual, required) {
  return (folderAccessRank[actual] ?? 0) >= (folderAccessRank[required] ?? 0)
}

export function canWriteFolder(access) {
  return canAccessFolder(access, folderAccess.WRITE)
}

export function canAdminFolder(access) {
  return canAccessFolder(access, folderAccess.ADMIN)
}

export function normalizeFolderId(folderId) {
  if (Array.isArray(folderId)) folderId = folderId[0]
  if (folderId === null || folderId === undefined) return null
  folderId = String(folderId).trim()
  if (!folderId || folderId === 'root' || folderId === 'null') return null
  return folderId
}