import express from "express"
import { isAuthenticateed } from "../middleware/isAuthenicated";
import { createCheckoutSession} from "../controller/order.controller";
import { getOrders } from "../controller/order.controller";


const router = express.Router();

router.route("/").get(isAuthenticateed,getOrders)
router.route("/checkout/create-checkout-session").post(isAuthenticateed,createCheckoutSession)
// router.route("/webhook").post(isAuthenticateed,stripeWebhook)



export default router


