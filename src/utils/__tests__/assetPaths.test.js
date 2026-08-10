import { expect, describe, it } from 'vitest'
import { assetPaths } from '../assetPaths.js'
import { ROOM_ASSETS, OUTPUT_ASSETS, ELEMENT_ASSETS } from '../../consts/assetRegistry.js'

describe('utils/assetPaths.js', () => {
  it('returns paths a caller can write back to, array indices included', () => {
    const settings = {
      logo: { image: 'a.png' },
      fonts: { typefaces: [{ url: 'x.woff2' }, { url: 'y.woff2' }] },
    }
    expect(assetPaths(settings, ROOM_ASSETS, 'settings')).to.deep.equal([
      { path: 'settings.logo.image', url: 'a.png', type: 'image' },
      { path: 'settings.fonts.typefaces[0].url', url: 'x.woff2', type: 'typeface' },
      { path: 'settings.fonts.typefaces[1].url', url: 'y.woff2', type: 'typeface' },
    ])
  })

  it('keeps two elements of the same type apart', () => {
    const config = ELEMENT_ASSETS.IMAGE
    expect(assetPaths({ image: 'one.png' }, config, 'elements[0].settings')[0].path).to.equal('elements[0].settings.image')
    expect(assetPaths({ image: 'two.png' }, config, 'elements[3].settings')[0].path).to.equal('elements[3].settings.image')
  })

  it('omits absent fields rather than emitting empty paths', () => {
    expect(assetPaths({ logo: {} }, ROOM_ASSETS, 'settings')).to.deep.equal([])
    expect(assetPaths(null, ROOM_ASSETS, 'settings')).to.deep.equal([])
    expect(assetPaths({ fonts: { typefaces: 'nope' } }, ROOM_ASSETS, 'settings')).to.deep.equal([])
  })

  it('skips typefaces with no url instead of shifting the indices', () => {
    const settings = { typefaces: [{ url: 'a.otf' }, { name: 'no url' }, { url: 'c.otf' }] }
    expect(assetPaths(settings, OUTPUT_ASSETS, 'settings').map(a => a.path)).to.deep.equal([
      'settings.typefaces[0].url',
      'settings.typefaces[2].url',
    ])
  })

  it('ignores non-string image values, so a nested object never becomes a write target', () => {
    expect(assetPaths({ background: { image: { nested: true } } }, ROOM_ASSETS, 'settings')).to.deep.equal([])
  })

  it('emits the sentinel and colour values that background.image also holds', () => {
    const found = assetPaths({ background: { image: 'BG_DEFAULT' } }, ROOM_ASSETS)
    expect(found).to.deep.equal([{ path: 'background.image', url: 'BG_DEFAULT', type: 'image' }])
  })

  it('works without a base path', () => {
    expect(assetPaths({ logo: { image: 'a.png' } }, ROOM_ASSETS)[0].path).to.equal('logo.image')
  })
})
