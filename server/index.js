const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.router')
const app = express()
const PORT = config.get('serverPort')
const corsMiddleWare = require('./middleware/cors.middleware')

app.use(corsMiddleWare)
app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
  try {
    await mongoose.connect(config.get('dburl'))
    
    app.listen(PORT, () => {
      console.log('server started on port ', PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()