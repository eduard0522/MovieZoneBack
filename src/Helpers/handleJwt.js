import jwt from 'jsonwebtoken'

import { SECRET_KEY } from '../config.js'

export const generateToken = (username, id) => {
  const token = jwt.sign({ username, id }, SECRET_KEY, {
    expiresIn: '1h'
  })
  return token
}

export const validateToken = (token) => {
  const isValidate = jwt.decode(token, SECRET_KEY)
  const { username, id } = isValidate
  if (!username || !id) {
    return false
  }
  return true
}
