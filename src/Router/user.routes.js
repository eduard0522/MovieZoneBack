import { Router } from "express";

import { createUser, getUserByEmail, Login } from "../Controllers/User.js";

const router = Router()

router.post("/" , createUser)
router.get("/:email",getUserByEmail)
router.post("/login", Login)
export default router;