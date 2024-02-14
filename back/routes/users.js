import { Router } from 'express'
import { create, login, logout, extend, getProfile, getUser, edit } from '../controllers/users.js'
import * as auth from '../middlewares/auth.js'

// import fileUpload from '../middlewares/fileUpload.js'

const router = Router()
// users.js的路由，註冊時沒有頭貼，但會給自動頭貼，編輯時可改，那路由要fileUpload?
router.post('/', create)
router.post('/login', auth.login, login)
router.delete('/logout', auth.jwt, logout)
router.patch('/extend', auth.jwt, extend)
router.get('/profile', auth.jwt, getProfile)
// router.get('/:USER_NAME', auth.jwt, getProfile)
router.get('/getUser', auth.jwt, getUser)
router.patch('/edit', auth.jwt, edit)

export default router
