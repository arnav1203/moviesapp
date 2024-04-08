const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./model/User1')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
app.use(cors())
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/Employees')


app.post('/signup', async (req, res) => {
    // console.log(req.body);
    const { name, email, password } = req.body;
    const hashedpswd = await bcrypt.hash(password, 10);
    let newUser = new UserModel({
        Name: name,
        Email: email,
        Password: hashedpswd,
    })
    console.log(newUser);
    newUser.save()
        .then(user => {
            console.log("User added:")
            res.json(user);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err: "unable to add user" });
        })
})

let mail;

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const check = await UserModel.findOne({ Email: email })
        console.log(check)
        if (check) {
            const storedhash = check.Password;
            const p = await bcrypt.compare(password, storedhash);
            if (p) {
                mail = check;
                const jwtPayLoad = {
                    id: check._id,
                    username: check.Name,
                    email: check.Email,
                }
                res.json("Success");
            }
            else {
                res.json("Failed");
            }
        }
        else {
            res.json("User not Found");
        }
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
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

    // const mailoptions = {

    // }

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