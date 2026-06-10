import { describe, expect, test } from 'vitest'
import { folderAccess } from '../../consts/folderAccess.js'
import {
  canAccessFolder,
  canWriteFolder,
  canAdminFolder,
  normalizeFolderAccess,
  normalizeFolderId,
} from '../folderAccess.js'

describe('folderAccess constants', () => {
  test('compares folder access by rank', () => {
    expect(canAccessFolder(folderAccess.ADMIN, folderAccess.WRITE)).toBe(true)
    expect(canAccessFolder(folderAccess.WRITE, folderAccess.ADMIN)).toBe(false)
    expect(canAccessFolder(folderAccess.READ, folderAccess.READ)).toBe(true)
  })

  test('checks write and admin access helpers', () => {
    expect(canWriteFolder(folderAccess.READ)).toBe(false)
    expect(canWriteFolder(folderAccess.WRITE)).toBe(true)
    expect(canWriteFolder(folderAccess.ADMIN)).toBe(true)

    expect(canAdminFolder(folderAccess.WRITE)).toBe(false)
    expect(canAdminFolder(folderAccess.ADMIN)).toBe(true)
  })

  test('normalizes folder access values', () => {
    expect(normalizeFolderAccess(folderAccess.READ)).toBe(folderAccess.READ)
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
