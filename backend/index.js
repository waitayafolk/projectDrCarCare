const express = require("express");
const app = express();
const port = 4600;
const conpool = require("./Connect/db_connect");
var cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const fileUpload = require("express-fileupload");
var bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

const line = require('@line/bot-sdk');
const config = require('./config.json');
const client = new line.Client(config);

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      res.status(401).json({ status: err.message });
    } else {
      if (Date.now() >= payload.exp * 1000) {
      } else {
        req.payload = payload;
        next();
      }
    }
  });
};
const admin = require("./Router/router_admins");
const services = require("./Router/router_services");
const customers = require("./Router/router_customers");
const company = require("./Router/router_company");

app.use("/upload", express.static("upload"));
app.use("/upload/logo", express.static("upload/logo"));

app.use(bodyParser.json());
app.use(cors());

app.use(fileUpload());

app.use("/admins", verifyToken , admin);
app.use("/services", verifyToken , services);
app.use("/customers", verifyToken , customers);
app.use("/company", verifyToken , company);

app.get("/", function (req, res) {
  res.send("Api It Working !");
});

app.post("/login", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM admin WHERE username = ($1) `,
      [req.body.username],
      async (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            let admin = result.rows[0]
            // console.log(admin.status)
            // return
            
            if (admin) {
              if(admin.status == false){
                return res.status(401).json({
                  status: "error",
                  message: "บัญชีถูกระงับการใช้งาน",
                });
              }
              let password = await bcrypt.compareSync(req.body.password, admin.password)
              if (password) {
                let payload = {
                  id: admin.id,
                  username: admin.username,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
                };
                let token = jwt.sign(payload, secretKey);
                res.status(200).json({
                  status: "success",
                  token: token,
                  data: admin,
                });
              } else {
                res.status(401).json({
                  status: "error",
                  message: "Username or Password is incorrect",
                });
              }
            }else{
              res.status(401).json({
                status: "error",
                message: "Username or Password is invalid",
            });
          }
        }
      }
    )
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/register", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM customer WHERE mobile = ($1) `,
      [req.body.mobile],
      async (err, result) => {
        if (err) {
            throw Error(err);
        } else {  
          let data = result.rows[0]
          if(data.id != undefined || data.id != null){
            conpool.query(`UPDATE customer SET mobile = $1 , name = $2 , line_id = $3 WHERE id = $4 ` , 
            [req.body.mobile , req.body.name , req.body.user_id , data.id], (err, result) => {
              if (err) {
                throw Error(err);
              } else {
                res.status(200).json({
                  status: "success",
                  message : 'ทำรายการสำเร็จ'
                });
              }
            });
          }else{
            conpool.query(`INSERT INTO customer ( mobile , name , status , create_date ,line_id   ) 
            VALUES ($1 , $2 , $3  , $4 , $5 ) ` , 
            [req.body.mobile , req.body.name ,  req.body.status ,  new Date() , req.body.user_id], (err, result) => {
                if (err) {
                    throw Error(err);
                } else {
                    res.status(200).json({
                        status: "success",
                        message : 'ทำรายการสำเร็จ'
                    });
                }
            });
          }
          console.log(result.rows[0])
          // console.log(req.body)
          return
        }
      }
    )
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/login/customer", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM customer WHERE mobile = ($1) `,
      [req.body.mobile],
      async (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            let customer = result.rows[0]
            // console.log(customer)
            // return
            if (customer) {
              if(customer.status == false){
                return res.status(501).json({
                  status: "error",
                  message: "บัญชีถูกระงับการใช้งาน",
                });
              }
              let payload = {
                id: customer.id,
                username: customer.name,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
              };
              let token = jwt.sign(payload, secretKey);
              res.status(200).json({
                status: "success",
                token: token,
                data: customer,
              });
            }else{
              res.status(401).json({
                status: "error",
                message: "Member is invalid",
            });
          }
        }
      }
    )
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/chang-password", verifyToken, async(req, res) => {
  conpool.query(`UPDATE admin SET password = $1  WHERE id = $2 ` , 
    [await bcrypt.hashSync(req.body.password, 12) , req.body.id ], (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            res.status(200).json({
                status: "success",
                message : 'แก้ไขข้อมูลสำเร็จ'
            });
        }
    });
});

app.post("/upload", verifyToken, (req, res) => {
    // if (req.files === null || req.files === undefined) {
    //     return res.status(400).json({ msg: "No file uploaded" });
    // }

    // const file = req.files.file;
    console.log(req.body.fileName)
    // file.mv(`${__dirname}/upload/image/${file.name}`, (err) => {
    //     if (err) {
    //     console.error(err);
    //     return res.status(500).send(err);
    //     } else {
    //     conpool.query(
    //         `UPDATE tb_company SET image_logo = $1 
    //                         WHERE id = $2 `,
    //         [`${file.name}`, req.payload.id],
    //         async (err, result) => {
    //         if (err) {
    //             throw Error(err);
    //         } else {
    //             res.json({ status: `success` });
    //         }
    //         }
    //     );
    //     }
    // });
});

app.post('/webhook' , (req, res) => {
  // console.log(req.body)
  // return
  if (!Array.isArray(req.body.events)) {
    return res.status(500).end();
  }
  // handle events separately
  Promise.all(req.body.events.map(event => {
    return handleEvent(event);
  }))
    .then(() => res.end())
    .catch((err) => {
      console.error(err);
      res.status(500).end();
    });
});

const replyText = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts.map((text) => ({ type: 'text', text }))
  );
  
};

// callback function to handle a single event
function handleEvent(event) {
  
  switch (event.type) {
    case 'message':
      const message = event.message;
      // console.log(message.type)
      // return
      switch (message.type) {
        case 'text':
          // console.log(message.text);
          return handleText(message, event.replyToken,event.source.userId);
        case 'image':
          return handleImage(message, event.replyToken);
        case 'video':
          return handleVideo(message, event.replyToken);
        case 'audio':
          return handleAudio(message, event.replyToken);
        case 'location':
          return handleLocation(message, event.replyToken);
        case 'sticker':
          return handleSticker(message, event.replyToken);
        default:
          throw new Error(`Unknown message: ${JSON.stringify(message)}`);
      }

    case 'follow':
      return replyText(event.replyToken, 'Got followed event');

    case 'unfollow':
      return console.log(`Unfollowed this bot: ${JSON.stringify(event)}`);

    case 'join':
      return replyText(event.replyToken, `Joined ${event.source.type}`);

    case 'leave':
      return console.log(`Left: ${JSON.stringify(event)}`);

    case 'postback':
      let data = event.postback.data;
      return replyText(event.replyToken, `Got postback: ${data}`);

    case 'beacon':
      const dm = `${Buffer.from(event.beacon.dm || '', 'hex').toString('utf8')}`;
      return replyText(event.replyToken, `${event.beacon.type} beacon hwid : ${event.beacon.hwid} with device message = ${dm}`);

    default:
      throw new Error(`Unknown event: ${JSON.stringify(event)}`);
  }
}

async function handleText(message, replyToken,userId) {
  if(message.text == 'สมัครสมาชิก'){
    let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = ${ruserId} `, [])).rows[0]
    if(customer.id != undefined || customer != null){
      return replyText(replyToken, `ท่านเป็นสมาชิกอยู่แล้ว คุณ${customer.name}`);
    }else{
      return replyText(replyToken, `ท่านยังไม่เป็นสมาชิก โปรลงทะเบียน : http://188.166.221.231:3388/register?user_id=${userId}`);
    }
  }else if (message.text == 'เข้าสู่ระบบ'){
    let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = ${ruserId} `, [])).rows[0]
    if(customer.id != undefined || customer != null){
      return replyText(replyToken, `เข้าสู่ระบบเรียบร้อย คุณ${customer.name}`);
    }else{
      return replyText(replyToken, `ท่านยังไม่เป็นสมาชิก โปรลงทะเบียน : http://188.166.221.231:3388/register?user_id=${userId}`);
    }
  }else if (message.text == 'ตรวจสอบสถานะรถ'){
    return replyText(replyToken, 'ยังไม่มีการฝากล้างรถ');
  }else if (message.text == 'สมาชิก'){
    let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = ${ruserId} `, [])).rows[0]
    if(customer.id != undefined || customer != null){
      return replyText(replyToken, `
                รายละเอียดสมาชิก
                ลูกค้าชื่อ :${customer.name}
                คะแนนสะสม :${customer.point}
                เบอร์โทรติดต่อ :${customer.point}
      `);
    }else{
      return replyText(replyToken, `ท่านยังไม่เป็นสมาชิก โปรลงทะเบียน : http://188.166.221.231:3388/register?user_id=${userId}`);
    }
  }
}

function handleImage(message, replyToken) {
  return replyText(replyToken, 'Got Image');
}

function handleVideo(message, replyToken) {
  return replyText(replyToken, 'Got Video');
}

function handleAudio(message, replyToken) {
  return replyText(replyToken, 'Got Audio');
}

function handleLocation(message, replyToken) {
  return replyText(replyToken, 'Got Location');
}

function handleSticker(message, replyToken) {
  return replyText(replyToken, 'http://iot.rmu.ac.th/linehospital/จองคิว/date.php');
}

app.get('/download_csv',(req, res) => {
  res.download('data.csv');
});

app.listen(port, function () {
  // console.log(process.env.PORT)
  console.log(`App listening on port ${port}!`);
});