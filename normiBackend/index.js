var express = require('express');
var con = require("./connection");
var bodyParser = require('body-parser');
var cors = require("cors");
var session = require("express-session");
var cookieParser = require("cookie-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials:true
}));

app.use(
  session({
    key: "userid",
    secret: "mysecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 1000,
    },
  })
);

// app.get("/", (req, res) => {
//   res.send("Welcome to NodeServer")
// })


// app.post("/regcode", (req, res) => {
//   const { username, useremail, userpassword, usermobile } = req.body;
//   const usertype = "customer";
  
// var sql1 = `insert into users(username,useremail,userpassword,usermobile,usertype) values('${username}','${useremail}','${userpassword}','${usermobile}','${usertype}')`;
//   con.query(sql1, function (error,result) {
//     if(error) {
//       console.log(error);
      
//     }else {
//         res.status(200).json({status:"success",message:"User Registerd Successfully"});
//       }
//   })
// })
app.post("/registration", function (req, res) {
  const userDataName = req.body.name;
  const userDataCno = req.body.cno;
  const userDataAge = req.body.age;
  res.send(userDataName);
  console.log(userData);
});
app.get("/", function (req, res) {
  res.send(req.body);
})

app.listen(5000, () => {
  console.log("listening on 5000");
});