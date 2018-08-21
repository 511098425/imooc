const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoute = require('./user');

const app = express()
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/user',userRoute)

app.listen(8000,function () {
    console.log("node express server start at 8000")
})