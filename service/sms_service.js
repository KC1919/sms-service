import twilio from 'twilio';
import dotenv from 'dotenv';
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
        } catch (error) {
            console.error("Error sending SMS:", error);
        }
    }
}

export default SMSService;