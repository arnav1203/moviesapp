const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const bodyparser = require('body-parser')
const app = express()
app.use(bodyparser.json())
app.use(cors())

app.post('/submitform', (req, res) => {
    const { name, email, message } = req.body;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {}
    })
})


app.listen(8000, () => {
    console.log('Server is running');
})