import { Router } from 'express'

import { Register, Login } from '../Controllers/auth.controller.js'
import { isAuthenticated } from '../Middlewares/ValidateAutehtication.js'

const router = Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/home', isAuthenticated, (req, res) => {
  res.send('Welcome, ')
})

export default router
