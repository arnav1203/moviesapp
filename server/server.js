const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./model/User1')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Employees')


app.post('/submit', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedpswd = await bcrypt.hash(password, 10);
    let newUser = new UserModel({
        Name: name,
        Email: email,
        Password: hashedpswd,
    })
    console.log(newUser);
})

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