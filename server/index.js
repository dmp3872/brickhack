// dependicies:
// npm add express cors twilio
import Reminders from '../src/components/reminders/Reminders';

const express = require('express');
const cors = require('cors');
const twilio = require('twilio');
require('dotenv').config;

// twilio requirements -- texting api
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); // blocks the browser from restricting any data

// Welcome Page for the Server
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
});

// Twilio test
app.get('/send-text', (req, res) => {
    // hello message
    res.send('Hello to the Twilio Server')

    // GET Variables, passed via query string
    const { recipient, textmessage } = req.query;

    // send text
    client.messages.create({
        body: textmessage,
        to: "+1" + recipient,
        from: '+16162538935' // my phone number from twilio
    }).then((message) => console.log(message.body));
})

// must have nodemon installed, http://localhost:4000
app.listen(4000, () => console.log("Running on Port 4000"));
