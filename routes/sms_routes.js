import SMSController from "../controller/sms_controller.js";

import express from "express";

const router = express.Router();

router
    .post('/send', SMSController.sendSMS)


export default router;