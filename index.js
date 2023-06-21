import express from "express";
import  cors  from "cors";

import { addFurniture } from "./furniture.js";
//this is to be able to use the .env file
import dotenv from 'dotenv'
dotenv.config()


console.log("MY PORT" , process.env.PORT)

const app = express()
app.use(cors())
app.use(express.json()) // to be able to recieve JSON as

const PORT = process.env.PORT || 4040

app.post('/', addFurniture)

app.get('/', (req,res) => {
    // res.status(200).send()

    // res.json('test')

    res.status(200).send('myapi')
})

app.listen(PORT, ()=> console.log('My api is running'))