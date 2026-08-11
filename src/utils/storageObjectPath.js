/**
 * The in-bucket object path a storage URL refers to, or null if the URL isn't in this bucket.
 *
 * Two shapes are in the wild, both percent-encoding the whole object path into one segment:
 *   https://storage.googleapis.com/<bucket>/rooms%2FABC%2Fimages%2Fx.png      current publicUrl()
 *   https://firebasestorage.googleapis.com/v0/b/<bucket>/o/logos%2Fuid%2Fx.png?alt=media&token=…
 *
 * The legacy form's `token` is a download credential, not part of the path — an object copied
 * from one is addressed by path alone, so the token is dropped along with the rest of the query.
 *
 * Lives here because the server copies files by this path and the functions cleanup matches
 * bucket objects against it, and those two can't import each other. Three partial parsers had
 * already drifted apart once.
 *
 * @param  {string} url
 * @param  {string} bucketName - e.g. 'stagetimer-prod.appspot.com'
 * @return {string|null}
 */
export function storageObjectPath (url, bucketName) {
  if (typeof url !== 'string' || !url || !bucketName) return null
  const path = url.split('?')[0]

  const prefixes = [
    `https://storage.googleapis.com/${bucketName}/`,
    `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/`,
  ]

  for (const prefix of prefixes) {
    if (!path.startsWith(prefix)) continue
    const encoded = path.slice(prefix.length)
    if (!encoded) return null
    try {
      return decodeURIComponent(encoded)
    } catch {
      return encoded
    }
  }

  return null
}
