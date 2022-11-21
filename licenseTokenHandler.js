import jwt from 'jsonwebtoken'
import { getPlanById } from './subscriptionHandler.js'

const schema = {
  planId: { type: Number, default: 0 },
  email: { type: String, default: null },
  uid: { type: String, default: null },
}

export function signToken (payload, privateKey, expiresIn = '1 month') {
  return jwt.sign(_applySchema(payload), privateKey, { algorithm: 'RS256', expiresIn })
}

export function validateToken (tokenString, publicKey) {
  let decoded, valid

  try {
    decoded = jwt.verify(tokenString, publicKey, { algorithms: ['RS256'] })
    decoded.exp = new Date(decoded.exp * 1000)
    valid = true
  } catch (err) {
    if (!err.message.includes('jwt must be provided')) console.error('[shared/licenseTokenHandler.js]', err.message)
    decoded = { exp: err.expiredAt || null }
    valid = false
  }

  return {
    ..._applySchema(decoded),
    exp: decoded.exp,
    plan: getPlanById(decoded.planId),
    token: tokenString,
    valid,
    active: new Date() < decoded.exp,
  }
}

function _applySchema (payload = {}) {
  const result = {}
  for (const key in schema) {
    result[key] = payload[key] || schema[key].default
  }
  return result
}
