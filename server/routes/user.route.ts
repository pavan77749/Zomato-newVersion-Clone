import express from "express"
import { checkAuth, forgotPassword, login, logout, resetpassword, signup, updateProfile, verifyEmail } from "../controller/user.controller"
import { isAutheticateed } from "../middleware/isAuthenicated"

const router = express.Router()

router.route("/check-auth").get(isAutheticateed,checkAuth)
router.route("/signup").post(signup)
router.route("/login").post(login)
router.route("/logout").post(logout)
router.route("/verify-email").post(verifyEmail)
router.route("/forgot-password").post(forgotPassword)
router.route("/reset-password/:token").post(resetpassword)
router.route("/profile/update").put(isAutheticateed,updateProfile)

export default router