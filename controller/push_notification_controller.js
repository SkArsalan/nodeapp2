const{ONE_SIGNAL_CONFIG} = require("../config/app.config")
const pushNotificationServices = require("../services/push_notification")
exports.SendNotification =(req,res,next)=>{
var message = {
    app_id : ONE_SIGNAL_CONFIG.APP_ID,
    contents:{"en":"Test Notification"},
    included_segments:["All"],
    content_available:true,
    small_icon:"ic_notification_icon",
    data:{
        PushTitle:"Test Notification"
    }
}
pushNotificationServices.SendNotification(message,(error,result)=>{
    if(error){
        return next(error)
    }
    return res.status(200).send({
        message:"Success",
        data:result
    })
})
}
