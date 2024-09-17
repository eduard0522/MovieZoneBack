import mongoose from "mongoose"

const userSchema =  new mongoose.Schema({
  username : {
    type : String,
    required:true,
    trim: true
  },
  email:{ 
    type: String,
    required:true,
    trim: true,
    unique:true,
    lowercase:true,
  },
  status:{
    type:Boolean,
    default:false
  },
  password:{ 
    type:String,
    required: true
    },
  favorites:{
    type:Array,
    default:[]
  },
  seeLatest:{
    type:Array,
    default:[]
  }
})

export default mongoose.model("User" , userSchema)
