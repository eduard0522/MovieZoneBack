import User from "../Models/user.model.js"

export const register = async (req,res) => {
  const { username, email, password } = req.body

  try {
    const newUser = new User ({
      username,
      email,
      password
    })
    await newUser.save()
    res.send("Registration successful")

  } catch (error) {
    console.log("Error to register ", error)
    res.json({errors:["Error to register"]})
  }
}

export const login = ( req,res) => {
  res.send("login")
}