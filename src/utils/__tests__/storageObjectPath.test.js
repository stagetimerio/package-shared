import { expect, describe, it } from 'vitest'
import { storageObjectPath } from '../storageObjectPath.js'

const BUCKET = 'stagetimer-prod.appspot.com'

describe('utils/storageObjectPath.js', () => {
  it('decodes the current publicUrl() form', () => {
    const url = `https://storage.googleapis.com/${BUCKET}/rooms%2FEXMYNZT2%2Fimages%2Fa.png`
    expect(storageObjectPath(url, BUCKET)).to.equal('rooms/EXMYNZT2/images/a.png')
  })

  it('decodes the legacy Firebase download form and drops its token', () => {
    const url = `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/logos%2Fuid%2Fx.png?alt=media&token=abc`
    expect(storageObjectPath(url, BUCKET)).to.equal('logos/uid/x.png')
  })

  it('handles unencoded paths the same way', () => {
    expect(storageObjectPath(`https://storage.googleapis.com/${BUCKET}/rooms/ABC/a.png`, BUCKET))
      .to.equal('rooms/ABC/a.png')
  })

  it('returns null for another bucket', () => {
    const url = 'https://storage.googleapis.com/someone-else.appspot.com/rooms%2FABC%2Fa.png'
    expect(storageObjectPath(url, BUCKET)).to.equal(null)
  })

  it('returns null for URLs that are not storage objects', () => {
    expect(storageObjectPath('https://example.com/a.png', BUCKET)).to.equal(null)
    expect(storageObjectPath('/spa-assets/a.png', BUCKET)).to.equal(null)
    expect(storageObjectPath('BG_GRADIENT', BUCKET)).to.equal(null)
    expect(storageObjectPath('', BUCKET)).to.equal(null)
    expect(storageObjectPath(null, BUCKET)).to.equal(null)
  })

  it('returns null when the URL names the bucket but no object', () => {
    expect(storageObjectPath(`https://storage.googleapis.com/${BUCKET}/`, BUCKET)).to.equal(null)
  })

  it('survives a malformed percent-escape rather than throwing', () => {
    const url = `https://storage.googleapis.com/${BUCKET}/rooms%2FABC%2F100%-scale.png`
    expect(storageObjectPath(url, BUCKET)).to.equal('rooms%2FABC%2F100%-scale.png')
  })
})
