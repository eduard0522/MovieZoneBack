import express from "express"
import cors from 'cors'
import routerIndex from "./src/Router/index.routes.js"
import routerVideos from "./src/Router/videos.routes.js"


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use("/" , routerIndex)
app.use("/videos" , routerVideos)

app.listen(port , ()=> {
  console.log(`Server is running on port http://localhost:${port}`)
})

export default app