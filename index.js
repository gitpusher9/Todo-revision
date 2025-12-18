const express = require("express")
const app = express()

const bodyParser = require("body-parser")

const userRouter = require("./backend/routes/user")

app.use(bodyParser)
app.use("/mytodo",userRouter)

app.listen(3000);