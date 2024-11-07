import express from "express"
import cors from 'cors'
import morgan from "morgan"
import { connection } from "./src/DB/conectiionDB.js"

import routerIndex from "./src/Router/index.routes.js"
import routerVideos from "./src/Router/videos.routes.js"
import routerUsers from "./src/Router/user.routes.js"
import authRoutes from "./src/Router/auth.routes.js"
const app = express()
const port = 3100

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))
app.use("/" , routerIndex)
app.use("/videos" , routerVideos)
app.use("/users" , routerUsers)
app.use("/api" , authRoutes)
connection()

app.listen(port , ()=> {
  console.log(`Server is running on port http://localhost:${port}`)
})



export default app