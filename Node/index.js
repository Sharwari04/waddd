const express=require('express');
const app=express();


app.use(express.static('public'))

app.listen(400,()=>{
    console.log("Server is Started");
})
    