import { describe, it, expect } from 'vitest'
import { getPreviewScreenshotUrl } from '../getPreviewScreenshotUrl.js'

describe('getPreviewScreenshotUrl', () => {
  it('converts basic stagetimer.io URL', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg')
  })

  it('converts URL with nested paths', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/output/688cbdf38490dac6f25c0eba/')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__output__688cbdf38490dac6f25c0eba__.jpg')
  })

  it('preserves query parameters', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/output/123/?v=2&signature=abc123')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__output__123__.jpg?v=2&signature=abc123')
  })

  it('preserves trailing slashes by default', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing/')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing__.jpg')
  })

  it('removes trailing slashes when option is enabled', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing/', { removeTrailingSlash: true })
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg')
  })

  it('handles URLs without trailing slashes', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg')
  })

  it('works with staging subdomain', () => {
    const result = getPreviewScreenshotUrl('https://staging.stagetimer.io/pricing')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/staging.stagetimer.io__pricing.jpg')
  })

  it('uses custom baseUrl when provided', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing', {
      baseUrl: 'https://custom-worker.example.com',
    })
    expect(result).toBe('https://custom-worker.example.com/stagetimer.io__pricing.jpg')
  })

  it('returns fallback image for localhost', () => {
    const url = 'http://localhost:3000/output/123'
    const result = getPreviewScreenshotUrl(url)
    expect(result).toBe('https://stagetimer.io/spa-assets/stagetimer-preview-v3.jpg')
  })

  it('returns fallback image for 127.0.0.1', () => {
    const url = 'http://127.0.0.1:8080/output/456'
    const result = getPreviewScreenshotUrl(url)
    expect(result).toBe('https://stagetimer.io/spa-assets/stagetimer-preview-v3.jpg')
  })

  it('throws error for invalid URL', () => {
    expect(() => {
      getPreviewScreenshotUrl('not-a-valid-url')
    }).toThrow('Invalid URL')
  })

  it('handles root path', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__.jpg')
  })

  it('handles root path with removeTrailingSlash', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/', { removeTrailingSlash: true })
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io.jpg')
  })

  it('handles complex query parameters with special characters', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/output/123/?foo=bar&baz=qux%20test')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__output__123__.jpg?foo=bar&baz=qux+test')
  })

  it('works with non-stagetimer.io domains', () => {
    const result = getPreviewScreenshotUrl('https://example.com/page')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/example.com__page.jpg')
  })

  it('adds cache key as query parameter', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing', { cacheKey: 'v2' })
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg?c=v2')
  })

  it('adds cache key alongside existing query parameters', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/output/123/?v=2&signature=abc', { cacheKey: 'v3' })
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__output__123__.jpg?v=2&signature=abc&c=v3')
  })

  it('works without cache key', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing')
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg')
  })

  it('handles numeric cache key', () => {
    const result = getPreviewScreenshotUrl('https://stagetimer.io/pricing', { cacheKey: '123' })
    expect(result).toBe('https://preview-screenshot.stagetimer.io/stagetimer.io__pricing.jpg?c=123')
  })
})
