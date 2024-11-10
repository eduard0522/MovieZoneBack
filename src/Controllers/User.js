import User from '../Models/user.model.js'

export const getUserByEmail = async (req, res) => {
  const { email } = req.params
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'Este usuario no existe.' })
    }
    res.status(200).json(user)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error al obtener el usuario.' })
  }
}
