import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.send('Servidor Ok')
})

export default router
