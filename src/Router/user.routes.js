import { Router } from 'express'

import { getUserByEmail } from '../Controllers/User.js'
import { Login, Register } from '../Controllers/auth.controller.js'

const router = Router()

router.post('/', Register)
router.get('/:email', getUserByEmail)
router.post('/login', Login)
export default router
