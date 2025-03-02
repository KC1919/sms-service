import SMSService from "../service/sms_service.js"
import { successResponse } from "../utils/api_response.js";

const SMS = new SMSService();

class SMSController {
    constructor(parameters) {
    }

    static sendSMS = async (req, res, next) => {
        try {
            const { data } = req.body;

            const { message, mobile } = data?.content;

            const result = await SMS.sendSMS({ message, mobile });
            successResponse(res, 200, 'SMS sent successfully!', result);
        } catch (error) {
            console.log('Failed to send sms!', error);
            next(error);
        }
    }
}

export default SMSController;