import express from 'express'
import ConnectionDB from './DB/ConnectionDB.js'
import {config}from 'dotenv'
import  cors from 'cors'
import router from './Src/Modules/Users/user.routes.js'
import { globalErrorHandling } from './Src/utils/errorHandling.js'
config()
const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.use('/user',router)
ConnectionDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.use(globalErrorHandling)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))