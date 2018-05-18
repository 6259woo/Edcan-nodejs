const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/testGet',(req,res)=>{
  res.send('Hello, ' + req.query.name);
})

// app.post('/signin', (req,res)=>{
//   var user = {id : "akat32", passwd : "passwd"};
//   if(req.body.id === user.id && req.body.passwd === user.passwd)
//     res.status(200).json({message : "Signin success!"})
//   else
//     res.status(404).json({message : "User Not found"})
// })

app.post('/signin', (req,res)=>{
  var num1 = '0', num2 = '0', operator = '0', resu = 0;
  num1 = req.body.num1;
  num2 = req.body.num2;
  operator = req.body.operator;
  if(operator == '*'){
    resu = String(parseInt(num1) * parseInt(num2));
  }else if (operator == '/') {
    resu = String(parseInt(num1) / parseInt(num2));
  }else if (operator == '-') {
    resu = String(parseInt(num1) - parseInt(num2));
  }else if (operator == '+') {
    resu = String(parseInt(num1) + parseInt(num2));
  }
  res.status(200).json(
    {'답' : resu}
  )}
)

var port = 3000;
app.listen(port, ()=>{
  console.log('Server Porting on',port)
})
