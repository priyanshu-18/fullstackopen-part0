require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const blogsRouter = require('./controllers/blogs')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGODB_URI)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app
