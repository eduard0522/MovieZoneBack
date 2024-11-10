import { Router } from 'express'
import { getVideo } from '../Controllers/videosController.js'

const router = Router()

router.get('/video', getVideo)

export default router
