const express = require('express');
const app = express();
const path = require("path")
const PORT = 2121;
const session = require('express-session');


app.use(express.static(path.join(__dirname, '/public/images/index.back.jpg')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'd21193809',
  resave: false,
  saveUninitialized: true
}));

app.get('/', (req,res)=>{
    
  const indexPath = path.join(__dirname, 'views', 'signUp.html')
  res.sendFile(indexPath)
})

app.post('/signUp', (req,res)=>{
    const {name, email, keypass} = req.body

    req.session.user = {name, email, keypass};

    res.redirect('/login')
})

app.get('/login', (req, res) => {
    const loginPath = path.join(__dirname, 'views', 'login.html');
    res.sendFile(loginPath);
  });

app.post('/login', (req,res) =>{
   const {email , keypass} = req.body

   if(email === req.session.user.email && keypass === req.session.user.keypass){
    res.redirect('/index')
   }
   else {
    res.redirect('/login?erro=true');
  }
})

app.get('/index', (req,res)=>{
  const indexPath = path.join(__dirname, 'views', 'index.html');
    res.sendFile(indexPath);
})

app.listen(PORT,()=>{
  console.log(`Server Running at the Port ${PORT}`)
  })