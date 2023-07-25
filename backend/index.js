const express = require("express");
const dotenv = require("dotenv");
const client = require("./connection.js");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const authenticate = require("./verifyToken.js");
// app.use(authenticate)
const bcrypt=require("bcrypt")


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
    cb(null, '../frontend/src/assets')
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
  const post = req.body;
  const query  = `insert into posts(city,state_name,place,description,value_for_money,safety,overall_exp,category,user_id) 
  values('${post.city}','${post.state}','${post.place}','${post.description}',${post.value_for_money},${post.safety},${post.overall_exp},'${post.category}',${post.user_id})
   returning post_id`;
   console.log(query)
  client.query(query, (err, result) => {
    if (!err) {
      console.log('HI');
      const pid = result.rows[0].post_id
      for (let i = 0; i < req.files.length; i++) {
        //console.log(req.files[i].path)
        client.query(`insert into images(img_path,post_id)
                    values('${req.files[i].filename}',${pid}) returning image_id`, (err, result) => {
          if (!err) {
            console.log(result.rows[0].image_id)
          } else {
            console.log("error 2", err)
          }
        })
      }
    } else {
      console.log("error1", err)
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
  // 

  //bcrypt
  const plaintextPassword = user.password
  console.log(plaintextPassword)
const saltRounds = 10;
bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
    //hashedPassword = hash
    // Save the hashed password to your database or wherever it's needed
    let insertQuery = `insert into users(name, email, password) 
  values('${user.name}','${user.email}','${hash}')`;
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
    // `Select * from users where email='${email}' and password='${password}'`,
    `Select * from users where email='${email}'`,
    (err, result) => {
      if (!err) {
        console.log("result",result.rows[0]);
        const hashedPassword=result.rows[0].password

        //bcrypt
  bcrypt.compare(password, hashedPassword, (err, result1) => {
    if (err) {
      console.error('Error comparing passwords:', err);
    } else if (result1) {
      console.log('Passwords match!',result1);
    } else {
      console.log('Passwords do not match!');
    }

    if (result1 && result.rows[0] ) {
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
  });




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


//posts count
app.get('/postcount',(req,res)=>{
  client.query(`select count(*) from posts`,(err,result)=>{
    if(!err){
      res.status(201).send(result.rows)
    }
    else{
      console.log(err)
    }
  })
})

app.get('/citycount',(req,res)=>{
  client.query(`select count(distinct(city)) from posts`,(err,result)=>{
    if(!err){
    res.send(result.rows)
    }
    else{
      console.log(err)
    }
  })
})

//getPost
app.get('/getpost', (req, res) => {
  client.query(`SELECT p.post_id, p.place, p.city, p.state_name, p.category, p.description, p.value_for_money, p.safety, p.overall_exp, p.user_id, u.name, STRING_AGG(i.img_path, ',')
                FROM posts p
                LEFT JOIN images i ON p.post_id = i.post_id
                JOIN users u ON u.id = p.user_id
                GROUP BY p.post_id, p.place, p.city, p.state_name, p.category, p.description, p.value_for_money, p.safety, p.overall_exp, p.user_id, u.name order by p.post_id desc`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      } else {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    });
});

//search
app.post('/search',(req,res)=>{
  const data=req.body;
  console.log('data',data)
  let insertQuery=`SELECT p.post_id, p.place, p.city, p.state_name, p.category, p.description, p.value_for_money, p.safety, p.overall_exp, p.user_id, u.name, STRING_AGG(i.img_path, ',')
  FROM posts p
  LEFT JOIN images i ON p.post_id = i.post_id
  JOIN users u ON u.id = p.user_id
  WHERE (
    ${data.city ? `p.city = '${data.city}'` : '1=1'}
  ) AND (
    ${data.category ? `p.category = '${data.category}'` : '1=1'}
  )
  GROUP BY p.post_id, p.place, p.city, p.state_name, p.category, p.description, p.value_for_money, p.safety, p.overall_exp, p.user_id, u.name;  
  `
  //console.log(insertQuery)
  client.query(insertQuery,(err,result)=>{
    if(!err){
      //console.log(result.rows)
      res.send(result.rows)
    }
    else{
      console.log(err)
    }
  })
})


//recentPosts
app.post('/recentPosts',(req,res)=>{
  client.query(`Select p.place, string_agg(i.img_path,','),u.name from posts p 
  join images i on p.post_id=i.post_id 
  join users u on u.id=p.user_id
  group by p.post_id,u.name order by p.post_id  desc limit 8`,(err,result)=>{
    if(!err){
      //console.log('recentPost',result.rows)
      res.status(201).send(result.rows)
    }
    else{
      console.log(err)
    }
  })
})

//particular post
app.post('/userPosts',(req,res)=>{
  const id=req.body.user_id
  client.query(`Select p.post_id, p.place, p.city, p.state_name, p.category, p.description, p.value_for_money, p.safety, p.overall_exp, p.user_id,STRING_AGG(i.img_path, ',') from posts p 
  join images i on p.post_id=i.post_id 
  where p.user_id=${id}
  group by p.post_id`,(err,result)=>{
    if(!err){
      //console.log(result.rows)
      res.send(result.rows)
    }
    else{
      console.log(err)
    }
  })
})

//edit post
app.post('/edit',(req,res)=>{
  console.log(req.body)
  const post=req.body
  client.query(`Update posts set place='${post.place}', city='${post.city}',state_name='${post.state}',description='${post.description}', category='${post.category}', value_for_money=${post.value_for_money},safety=${post.safety},overall_exp=${post.overall_exp} where post_id=${post.post_id}`,(err,result)=>{
    if(!err){
      console.log('updation successful')
    }
    else{
      console.log(err)
    }
  })
})

//deletePost
app.post('/deletePost',(req,res)=>{
  const id=req.body.post_id
  console.log(id)
  client.query(`delete from images where post_id=${id}`,(err,result)=>{
    if(!err){
      client.query(`delete from posts where post_id=${id}`,(err1,res1)=>{
        if(!err1){
          console.log('deletion successful')

        }
        else{
          console.log("err1",err1)
        }
      })
      res.send("1234")
    }
    else{
      console.log("err",err)
    }
  })
})
app.use(authenticate);