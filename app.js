import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: 'config/.env' });

import SMSRouter from './routes/sms_routes.js';


const app = express();
app.use(express.json());

const PORT = 3002;


app.use('/api/v1/sms', SMSRouter);


app.get('/health', (req, res) => {
    try {
        res.status(200).json({
            message: 'SMS Service up and running'
        });
    } catch (error) {
        console.log('Failed to send sms noti', error);
    }
});

app.listen(PORT, () => {
    console.log('SMS server listening on port:', PORT);
});