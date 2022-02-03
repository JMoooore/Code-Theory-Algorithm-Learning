// import {} from 'dotenv/config'
import './env.js'
import cors from 'cors'
import express from 'express'
import * as routes from './routes/index.js'
const app = express()
const corsConfig = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsConfig))
const PORT = process.env.PORT 
app.use(express.json())

app.listen(PORT, ()=>{
    console.log(`server running on port: ${PORT}`)
})