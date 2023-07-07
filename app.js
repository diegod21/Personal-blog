const express = require('express');
const app = express();
const path = require("path")
const PORT = 2121;
const section = require('express-session')
app.use(express.json());

app.get('/', (req,res)=>{
    
    const indexPath = path.join(__dirname, 'views', 'signUp.html')
    res.sendFile(indexPath)
})
app.listen(PORT,()=>{
console.log(`Server Running at the Port ${PORT}`)
})

const session = require('express-session');

app.use(session({
  secret: 'd21193809',
  resave: false,
  saveUninitialized: true
}));

app.post('/signUp', (req,res)=>{
    const {name, email, keypass} = req.body

    req.session.user = {name, email, keypass};

    res.redirect('/login')
})

app.get('/login', (req, res) => {
    const loginPath = path.join(__dirname, 'views', 'login.html');
    res.sendFile(loginPath);
  });