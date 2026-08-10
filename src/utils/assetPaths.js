import _ from 'lodash'

/**
 * Every asset URL a registry names within a settings object, as paths that can be written back.
 *
 * The registry in `consts/assetRegistry.js` describes where assets live; this turns that
 * description into concrete locations — array indices resolved — so a caller can `_.set` the
 * result of moving a file without knowing the shape of the field it came from.
 *
 * @param  {any} settings
 * @param  {{ path: string, type: string, isArray?: boolean }[]} config - From assetRegistry
 * @param  {string} [basePath] - Prepended to each path, e.g. 'settings' or 'elements[0].settings'
 * @return {{ path: string, url: string, type: string }[]}
 */
export function assetPaths (settings, config, basePath = '') {
  const found = []
  if (!settings || !config?.length) return found
  const at = (path) => basePath ? `${basePath}.${path}` : path

  for (const asset of config) {
    const current = _.get(settings, asset.path)
    if (!current) continue

    if (asset.isArray) {
      if (!Array.isArray(current)) continue
      current.forEach((typeface, i) => {
        if (typeface?.url) found.push({ path: at(`${asset.path}[${i}].url`), url: typeface.url, type: asset.type })
      })
      continue
    }

    if (typeof current === 'string') found.push({ path: at(asset.path), url: current, type: asset.type })
  }

  return found
}
