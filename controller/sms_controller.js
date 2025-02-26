import SMSService from "../service/sms_service.js"

const SMS = new SMSService();

class SMSController {
    constructor(parameters) {
    }

    static sendSMS = async (req, res) => {
        try {
            const { data } = req.body;

            const { message } = data;

            await SMS.sendSMS(message);
            res.status(200).json({
                message: 'Response from sms noti service'
            })
        } catch (error) {
            console.log('Failed to send sms!', error);
        }
    }
}

export default SMSController;