const express= require("express")
const{SendNotification}=require("../controller/push_notification_controller")
const router = express.Router()
router.route("/SendNotification").post(SendNotification)
module.exports = router
