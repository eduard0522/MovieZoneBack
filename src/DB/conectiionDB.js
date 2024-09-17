import mongoose from "mongoose"


export const connection = async () => {
  try {
    await  mongoose.connect("mongodb://localhost/movieZone")
       console.log(' >>>> DB is Connected!')
  } catch (error) {
    console.log( "Error connecting to database. >>>>> " , error)
  }
}

