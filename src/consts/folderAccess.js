export const folderAccess = Object.freeze({
  NONE: 'NONE',
  READ: 'READ',
  WRITE: 'WRITE',
  ADMIN: 'ADMIN',
})

export const folderAccessLabels = Object.freeze({
  [folderAccess.NONE]: 'No access',
  [folderAccess.READ]: 'Read',
  [folderAccess.WRITE]: 'Write',
  [folderAccess.ADMIN]: 'Admin',
})

export const folderAccessOptions = [
  { value: folderAccess.NONE, label: folderAccessLabels[folderAccess.NONE] },
  { value: folderAccess.READ, label: folderAccessLabels[folderAccess.READ] },
  { value: folderAccess.WRITE, label: folderAccessLabels[folderAccess.WRITE] },
  { value: folderAccess.ADMIN, label: folderAccessLabels[folderAccess.ADMIN] },
]

export const folderAccessRank = Object.freeze({
  [folderAccess.NONE]: 0,
  [folderAccess.READ]: 1,
  [folderAccess.WRITE]: 2,
  [folderAccess.ADMIN]: 3,
})

const folderAccessValues = Object.values(folderAccess)

export function normalizeFolderAccess (access) {
  if (access === null || access === undefined || access === '') return null
  if (folderAccessValues.includes(access)) return access
  return null
}

export function canAccessFolder (actual, required) {
  return (folderAccessRank[actual] ?? 0) >= (folderAccessRank[required] ?? 0)
}

export function canWriteFolder (access) {
  return canAccessFolder(access, folderAccess.WRITE)
}

export function canAdminFolder (access) {
  return canAccessFolder(access, folderAccess.ADMIN)
}

export function normalizeFolderId (folderId) {
  if (Array.isArray(folderId)) folderId = folderId[0]
  if (folderId === null || folderId === undefined) return null
  folderId = String(folderId).trim()
  if (!folderId || folderId === 'root' || folderId === 'null') return null
  return folderId
}
