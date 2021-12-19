const express=require('express')
const app=express()
const port =4567 
app.get('/getdata', (req, res) => {
    console.log("LL")
    res.json({'Hello World!':567})

  })
app.listen(port,()=>{
    console.log("TTT")
})
