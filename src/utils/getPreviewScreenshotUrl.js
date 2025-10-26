const FALLBACK_IMAGE = 'https://stagetimer.io/spa-assets/stagetimer-preview-v3.jpg'

/**
 * Converts a URL to a preview screenshot URL hosted on Cloudflare Worker
 *
 * @param {string} url - The URL to convert to a screenshot URL
 * @param {Object} [options={}] - Configuration options
 * @param {string} [options.baseUrl='https://preview-screenshot.stagetimer.io'] - The base URL of the screenshot worker
 * @param {boolean} [options.removeTrailingSlash=false] - Whether to remove trailing slashes from paths
 * @param {string} [options.cacheKey] - Cache key for cache busting (added as 'c' query parameter)
 * @returns {string} The preview screenshot URL
 *
 * @example
 * getPreviewScreenshotUrl('https://stagetimer.io/pricing')
 * // => 'https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg'
 *
 * @example
 * getPreviewScreenshotUrl('https://stagetimer.io/output/123/?v=2&signature=abc')
 * // => 'https://preview-screenshot.stagetimer.io/stagetimer.io__output__123__.jpg?v=2&signature=abc'
 *
 * @example
 * getPreviewScreenshotUrl('https://stagetimer.io/output/123/', { removeTrailingSlash: true })
 * // => 'https://preview-screenshot.stagetimer.io/stagetimer.io__output__123.jpg'
 *
 * @example
 * getPreviewScreenshotUrl('https://stagetimer.io/pricing', { cacheKey: 'v2' })
 * // => 'https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg?c=v2'
 */
export function getPreviewScreenshotUrl (url, { baseUrl = 'https://preview-screenshot.stagetimer.io', removeTrailingSlash = false, cacheKey } = {}) {
  // Parse the input URL
  let parsedUrl
  try {
    parsedUrl = new URL(url)
  } catch (error) {
    throw new Error(`Invalid URL: ${url}`)
  }

  // Handle localhost - return original URL as fallback
  if (parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1') {
    return FALLBACK_IMAGE
  }

  // Extract hostname and pathname
  let fullPath = parsedUrl.hostname + parsedUrl.pathname

  // Optionally remove trailing slash
  if (removeTrailingSlash && fullPath.endsWith('/')) {
    fullPath = fullPath.slice(0, -1)
  }

  // Replace slashes with double underscores for encoding
  const encodedPath = fullPath.replace(/\//g, '__')

  // Build the worker URL using URL API
  const screenshotUrl = new URL(`/${encodedPath}.jpg`, baseUrl)

  // Copy over original search params
  for (const [key, value] of parsedUrl.searchParams) {
    screenshotUrl.searchParams.set(key, value)
  }

  // Add cache key if provided
  if (cacheKey) {
    screenshotUrl.searchParams.set('c', cacheKey)
  }

  return screenshotUrl.toString()
}
