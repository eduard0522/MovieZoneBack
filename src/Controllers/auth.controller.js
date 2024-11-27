import User from '../Models/user.model.js'

import { comparePassword, hashPassword } from '../Helpers/hashPassword.js'
import { generateToken } from '../Helpers/handleJWT.js'

export const Register = async (req, res) => {
  const { username, password, email } = req.body

  const hashedPassword = await hashPassword(password)
  const ifExistUser = await User.findOne({ email })
  if (ifExistUser) {
    return res.status(400).json({ message: 'Este correo ya se encuentra registrado!' })
  }
  const newUser = new User({ username, email, password: hashedPassword })

  try {
    const saveUser = await newUser.save()
    const token = generateToken(saveUser.username, saveUser._id)
    const user = { username: saveUser.username, token }
    res
      .cookie('acces_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      })
      .status(201)
      .json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al guardar el Usuario.' })
  }
}

export const Login = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'Usuario o clave incorrecta.' })
    }
    const isValidPassword = await comparePassword(password, user.password)
    if (!isValidPassword) {
      return res.status(404).json({ message: 'Usuario o clave incorrecta.' })
    }
    const token = generateToken(user.username, user._id)
    res
      .cookie('acess_token', token, {
        sameSite: 'none',
        secure: true,
        httpOnly: false
      })
      .status(200).json({ token, username: user.username })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al iniciar sesión.' })
  }
}
