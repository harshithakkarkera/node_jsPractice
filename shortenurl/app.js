const express=require('express')
const app = express();
app.use(express.json())
const urlRouter = require('./routes/urlRoutes')

app.use("/api/v1/url",urlRouter)
module.exports= app