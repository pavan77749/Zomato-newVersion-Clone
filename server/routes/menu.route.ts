import express from "express"
import { isAuthenticateed } from "../middleware/isAuthenicated";
import upload from "../middleware/multer";
import { addMenu, editMenu } from "../controller/menu.controller";

const router = express.Router();

router.route("/").post(isAuthenticateed,upload.single("image"), addMenu)
router.route("/:id").put(isAuthenticateed,upload.single("image"), editMenu)

export default router


