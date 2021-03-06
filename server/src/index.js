const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const config = require('./config/config')
const {sequelize} = require('./models')
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
    .then(()=>{
        app.listen(config.port)
        console.log(`server started on port : ${config.port}`)

    })

