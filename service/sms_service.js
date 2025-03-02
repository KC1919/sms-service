import twilio from 'twilio';
import dotenv from 'dotenv';
import CustomError from '../utils/custom_error.js';
dotenv.config({ path: 'config/.env' });

class SMSService {

    constructor(parameters) {
        this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    }

    sendSMS = async ({ message, mobile }) => {
        try {
            const messageResp = await this.client.messages.create({
                body: message,
                from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
                to: mobile // Receiver's phone number
            });

            console.log("SMS Sent! Message SID:", messageResp.sid);
            return messageResp;
        } catch (error) {
            console.error("Error sending SMS:", error);
            throw new CustomError('Error sending SMS, server error', 500);
        }
    }
}

export default SMSService;