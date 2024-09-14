import express from "express"
import { isAuthenticateed } from "../middleware/isAuthenicated";
import upload from "../middleware/multer";
import { addMenu, editMenu } from "../controller/menu.controller";

const router = express.Router();

router.route("/").post(isAuthenticateed,upload.single("imageFile"), addMenu)
router.route("/:id").post(isAuthenticateed,upload.single("imageFile"), editMenu)

export default router


