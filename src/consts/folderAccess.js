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
  [folderAccess.READ]: 10,
  [folderAccess.WRITE]: 20,
  [folderAccess.ADMIN]: 30,
})
