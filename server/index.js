const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors')
const userController = require('./controller/user')

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://GoFood:Paresh2411@cluster0.bzdqtiy.mongodb.net/UserData?retryWrites=true&w=majority', (err) => {
    if (err) {
        console.log('DB Err.')
    } else {
        console.log('DB Connected.')
    }
}); 

app.post('/signup', userController.signup)
app.post('/signin', userController.signin)
app.post('/submit-otp', userController.submitotp)
app.post('/send-otp', userController.sendotp)

app.listen(5000, () => {
    console.log(`Backend Running At Port 5000`)
})