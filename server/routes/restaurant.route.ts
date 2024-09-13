import express from "express"
import { createRestaurant, getRestaurant, getRestaurantOrder, getSingleRestaurant, searchRestaurant, updateOrderStatus, updateRestaurant } from "../controller/restaurant.controller";
import { isAuthenticateed } from "../middleware/isAuthenicated";
import upload from "../middleware/multer";

const router = express.Router();

router.route("/").post(isAuthenticateed,upload.single("imageFile"), createRestaurant)
router.route("/").get(isAuthenticateed,getRestaurant)
router.route("/").put(isAuthenticateed,upload.single("imageFile"), updateRestaurant)
router.route("/order").get(isAuthenticateed,getRestaurantOrder)
router.route("/order/:orderId/status").put(isAuthenticateed,updateOrderStatus)
router.route("/search/:searchText").get(isAuthenticateed,searchRestaurant)
router.route("/:id").get(isAuthenticateed,getSingleRestaurant)

export default router


