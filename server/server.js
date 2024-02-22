const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./model/User1')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
app.use(cors())

app.post('/submitform', (req, res) => {
    const { name, email, message } = req.body;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail',
            pass: 'your_password',
        }
    });

    const mailoptions = {

    }

    transport.sendMail(mailoptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending mail')
        }
        else {
            console.log(info)
        }
    })
})


app.listen(8000, () => {
    console.log('Server is running');
})