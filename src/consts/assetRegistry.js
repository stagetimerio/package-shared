/**
 * Asset Registry
 *
 * Declares where uploadable assets (images, typefaces) live inside room settings, output
 * settings and element settings. Anything that copies an entity — room duplicate, output
 * duplicate, copy-to-room, JSON import — re-uploads via these lists so the copy owns its
 * files instead of pointing at the source's. Cleanup walks the same lists in the other
 * direction, to know which storage prefixes an entity's files occupy.
 *
 * It lives here rather than in the server because the server and Firebase functions both need
 * it and cannot import across that boundary. A second hand-written copy is how
 * `logo.url` came to be missing from cleanup while the copy code had it.
 *
 * IMPORTANT: a settings field that holds an uploaded URL and is missing here will be shared
 * with the source on every copy, and deleting the source will break the copy.
 */
import * as outputElements from './outputElements.js'

export const ASSET_TYPES = {
  IMAGE: 'image',
  TYPEFACE: 'typeface',
}

/**
 * Each entry is:
 * - path: Lodash-style path within the settings object (e.g., 'background.imageUrl')
 * - type: IMAGE or TYPEFACE
 * - isArray: (optional) true if the property is an array of assets
 */
export const ROOM_ASSETS = [
  { path: 'logo.image', type: ASSET_TYPES.IMAGE },
  { path: 'background.image', type: ASSET_TYPES.IMAGE },
  { path: 'submitQuestions.customLogo', type: ASSET_TYPES.IMAGE },
  { path: 'fonts.typefaces', type: ASSET_TYPES.TYPEFACE, isArray: true },
]

// The output logo is `logo.url`, not `logo.image` — the room field of the same name has a
// different shape, which is how this one stayed missing.
export const OUTPUT_ASSETS = [
  { path: 'background.imageUrl', type: ASSET_TYPES.IMAGE },
  { path: 'blackout.imageUrl', type: ASSET_TYPES.IMAGE },
  { path: 'logo.url', type: ASSET_TYPES.IMAGE },
  { path: 'typefaces', type: ASSET_TYPES.TYPEFACE, isArray: true },
]

/**
 * Element-level assets, organized by element type.
 *
 * Example future addition:
 *
 * [outputElements.CUSTOM_ELEMENT]: [
 *   { path: 'backgroundImage', type: ASSET_TYPES.IMAGE },
 *   { path: 'customFonts', type: ASSET_TYPES.TYPEFACE, isArray: true },
 * ],
 */
export const ELEMENT_ASSETS = {
  [outputElements.IMAGE]: [
    { path: 'image', type: ASSET_TYPES.IMAGE },
  ],
  [outputElements.QR_CODE]: [
    { path: 'logoImage', type: ASSET_TYPES.IMAGE },
  ],
}
