import twilio from 'twilio';
import dotenv from 'dotenv';
dotenv.config({ path: 'config/.env' });

class SMSService {

    constructor(parameters) {
        this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    }

    sendSMS = async (messageData) => {
        try {
            const message = await this.client.messages.create({
                body: messageData,
                from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio number
                to: "+916263792790" // Receiver's phone number
            });

            console.log("SMS Sent! Message SID:", message.sid);
        } catch (error) {
            console.error("Error sending SMS:", error);
        }
    }
}

export default SMSService;