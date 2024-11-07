import User from "../Models/user.model.js";
import { hashPassword, comparePassword } from "../Helpers/hashPassword.js";

export const createUser = async (req,res) => {
  const { username , password, email } = req.body

  const hashedPassword = await hashPassword(password)
  const user = new User({username , email, password: hashedPassword})

  try {
    console.log(user)
    const saveUser = await user.save()
    res.status(201).json(saveUser)  

  } catch (error) {
    console.log(error)
    res.status(500).json({message:"Error al guardar el Usuario."})
  }
}


export const getUserByEmail = async (req,res) => {

    const {email} = req.params
    try {
      const  user = await User.findOne({email})
      if(!user){
        return res.status(404).json({message:"Este usuario no existe."})
      }
      res.status(200).json(user)
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error al obtener el usuario."})
    }
}


export const Login = async  (req,res) => {
  const { email,password}  = req.body
  try {
    const user = await User.findOne({email})
    if(!user){
      return res.status(404).json({message:"Usuario o clave incorrecta."})
    }
    const isValidPassword = await comparePassword(password,user.password)
    if(!isValidPassword){
      return res.status(404).json({message:"Usuario o clave incorrecta."})
    }
    res.status(200).json({message:"Bienvenido de nuevo"})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Error al iniciar sesión."})
  }
}
