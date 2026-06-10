import { describe, expect, test } from 'vitest'
import {
  ADMIN_ACCESS_LEVEL,
  READ_ACCESS_LEVEL,
  WRITE_ACCESS_LEVEL,
} from '../../consts/folderAccess.js'
import {
  canAccessFolder,
  canWriteFolder,
  canAdminFolder,
  normalizeFolderAccess,
  normalizeFolderId,
} from '../folderAccess.js'

describe('folderAccess constants', () => {
  test('compares folder access by rank', () => {
    expect(canAccessFolder(ADMIN_ACCESS_LEVEL, WRITE_ACCESS_LEVEL)).toBe(true)
    expect(canAccessFolder(WRITE_ACCESS_LEVEL, ADMIN_ACCESS_LEVEL)).toBe(false)
    expect(canAccessFolder(READ_ACCESS_LEVEL, READ_ACCESS_LEVEL)).toBe(true)
  })

  test('checks write and admin access helpers', () => {
    expect(canWriteFolder(READ_ACCESS_LEVEL)).toBe(false)
    expect(canWriteFolder(WRITE_ACCESS_LEVEL)).toBe(true)
    expect(canWriteFolder(ADMIN_ACCESS_LEVEL)).toBe(true)

    expect(canAdminFolder(WRITE_ACCESS_LEVEL)).toBe(false)
    expect(canAdminFolder(ADMIN_ACCESS_LEVEL)).toBe(true)
  })

  test('normalizes folder access values', () => {
    expect(normalizeFolderAccess(READ_ACCESS_LEVEL)).toBe(READ_ACCESS_LEVEL)
    expect(normalizeFolderAccess('')).toBe(null)
    expect(normalizeFolderAccess(null)).toBe(null)
    expect(normalizeFolderAccess(undefined)).toBe(null)
    expect(normalizeFolderAccess('INVALID')).toBe(null)
  })

  test('normalizes folder ids from route and query inputs', () => {
    expect(normalizeFolderId([' folder-1 ', 'folder-2'])).toBe('folder-1')
    expect(normalizeFolderId(' folder-1 ')).toBe('folder-1')
    expect(normalizeFolderId(123)).toBe('123')
    expect(normalizeFolderId('')).toBe(null)
    expect(normalizeFolderId('root')).toBe(null)
    expect(normalizeFolderId('null')).toBe(null)
    expect(normalizeFolderId(null)).toBe(null)
    expect(normalizeFolderId(undefined)).toBe(null)
  })
})
