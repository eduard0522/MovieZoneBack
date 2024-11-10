import { validateToken } from '../Helpers/handleJWT.js'

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) {
    return res
      .status(401)
      .json({
        message: 'No estas autorizado, regístrate y disfruta del contenido.'
      })
  }
  const isValid = validateToken(token)
  if (!isValid) {
    return res.status(401).json({ message: 'No estas autorizado, regístrate y disfruta del contenido.' })
  }

  next()
}
