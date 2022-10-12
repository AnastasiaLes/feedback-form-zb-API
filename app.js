const express = require('express')
const logger = require('morgan')
const cors = require('cors')
require("dotenv").config()

const feedbacksRouter = require('./routes/api/feedback')

const app = express()


// const feedbacks = require('./models/feedback.json')
// app.get('/', (req, res) => {
//     res.json(feedbacks)
// })


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/feedback', feedbacksRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
 const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message })
})

module.exports = app