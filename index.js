const express = require('express')
const app = express()
const port = 5000

require('dotenv').config() 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/name",(req,res)=>{
    res.send("Hey! This is Varun")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})