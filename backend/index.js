const express = require("express");
const dotenv = require("dotenv");
const client = require("./connection.js");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const authenticate = require("./verifyToken.js");
// app.use(authenticate)



const multer=require("multer");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());



let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Sever is now listening at port 5000");
});
client.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});




//multer added
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    //console.log(file)
    cb(null, './images')
  },
  filename: function (req, file, cb) {
    //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //cb(null, file.fieldname + '-' + uniqueSuffix)
    cb(null, `${Date.now()}--${file.originalname}`)
  }
})
app.use(express.urlencoded({extended:false}))
const upload = multer({ storage: storage }).array('avatar') 
// app.post('/posts/:id',(req,res)=>{
//   const post=req.body;
//   client.query(`insert into post(city,state_name,place,description,rating,category,user_id) 
//                 values('${post.city}','${post.state_name}','${post.place}','${post.description}',${post.rating},'${post.category}')
//                 returning post_id`,(err,result)=>{
//                   if(!err){
//                    const pid=result.rows[0].post_id
//                   }

//                 })
//                 app.post('/upload', upload, function (req, res, next) {
//                   console.log(req.body);
//                   console.log(req.files);
                  
//                   for(let i=0;i<req.files.length;i++){
//                     //console.log(req.files[i].path)
//                     //client.
//                     paths.push(req.files[i].path)
//                   }
//                   res.send("ji")
//                 })
// })
app.post('/upload', upload, function (req, res, next) {
  console.log(req.body);
  console.log(req.files);
  const post=req.body
  client.query(`insert into posts(city,state_name,place,description,value_for_money,safety,overall_exp,category,user_id) 
               values('${post.city}','${post.state}','${post.place}','${post.description}',${post.value_for_money},${post.safety},${post.overall_exp},'${post.category}',${post.user_id})
                returning post_id`,(err,result)=>{
                  if(!err){
                   const pid=result.rows[0].post_id
                   for(let i=0;i<req.files.length;i++){
                    //console.log(req.files[i].path)
                    client.query(`insert into images(img_path,post_id)
                    values('${req.files[i].path}',${pid}) returning image_id`,(err,result)=>{
                      if(!err){
                        console.log(result.rows[0].image_id)
                      }
                      else{
                        console.log("error 2", err)
                      }
                    })
                  }
                  }
                  else{
                    console.log("error1",err)
                  }
                })
 
  res.send("ji")
})

// get all users
app.get("/users", (req, res) => {
  //console.log("bsfhdguys");
  client.query(`Select * from users`, (err, result) => {
    //console.log('dhsguyugy');
    if (!err) {
      res.send(result.rows);
      console.log(result.rows);
      //console.log('fuhfsadi')
    } else {
      console.log(err);
    }
  });
});
//signup
app.post("/users", (req, res) => {
  const user = req.body;
  console.log(user);
  let insertQuery = `insert into users(name, email, password) 
    values('${user.name}','${user.email}','${user.password}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
        console.log(result)
      console.log(result.rows);
      res.status(201).send(result.rows);
    } else {
      console.log(err);
      res.send("user already exist");
    }
  });
  client.end;
});

//login
app.post("/login", (req, res) => {
  console.log("Hello");
  const { email, password } = req.body;
  console.log(email, password);
  client.query(
    `Select * from users where email='${email}' and password='${password}'`,
    (err, result) => {
      if (!err) {
        console.log("Hello again");
        if (result.rows[0]) {
          const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET);
          console.log(token);
          const sendItems = [{
            id: result.rows[0].id,
            name: result.rows[0].name,
            email: result.rows[0].email,
            password: result.rows[0].password,
            created_at: result.rows[0].created_at,
            token: token,
          }];
          res.status(201).send(sendItems);
        }
        //console.log(result.rows[0]);
        // console.log(result.rows)
        // res.status(201).send(result.rows);
        else {
          console.log(err);
          res.send("invalid user or password");
        }
      }
    }
  );
});

//users count
app.get('/userscount',(req,res)=>{
    client.query(`SELECT COUNT(*) from users`,(err,result)=>{
        if(!err){
            //console.log(result.rows[0])
            res.status(201).send(result.rows)
        }
        else{
            console.log(err)
        }
    })
})

app.use(authenticate);
