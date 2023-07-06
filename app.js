const express = require('express');
const app = express();
const path = require("path")
const PORT = 2121;


app.get('/', (req,res)=>{
    
    const indexPath = path.join(__dirname, 'views', 'index.html')
    res.sendFile(indexPath)
})
app.listen(PORT,()=>{
console.log(`Server Running at the Port ${PORT}`)
})