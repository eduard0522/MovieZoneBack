import bcrypt from "bcrypt"

export const hashPassword = async (passPlain) => {
  const hash = bcrypt.hash(passPlain,10)
  try {
    return hash
  } catch (error) {
    return error
  }
}

export const comparePassword = async (plainPassword , hashedPassword) => {
  console.log(plainPassword , hashedPassword
  )
    const validate = bcrypt.compare(plainPassword, hashedPassword)

    try { 
      return validate
    } catch (error) {
        return error
    }
}