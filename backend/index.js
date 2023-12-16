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
var fs = require('fs');
var https = require('https');

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
const endbill = require("./Router/router_endbill");
const packet = require("./Router/router_packet");
const report = require("./Router/router_report");


app.use("/upload", express.static("upload"));
app.use("/upload/logo", express.static("upload/logo"));

app.use(bodyParser.json());
app.use(cors());

app.use(fileUpload());

app.use("/admins", verifyToken , admin);
app.use("/services", verifyToken , services);
app.use("/customers", verifyToken , customers);
app.use("/company", verifyToken , company);
app.use("/endbill", verifyToken , endbill);
app.use("/packet", verifyToken , packet);
app.use("/report", verifyToken , report);


app.get("/", function (req, res) {
  res.send("Api It Working !");
});

app.post("/login", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM admin WHERE username = ($1) AND status ='use'`,
      [req.body.username],
      async (err, result) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            let admin = result.rows[0]
            // console.log(admin.status)
            // return
            
            if (admin) {
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

function thaiDateNotime (data){
  const date = new Date(data)

  const result = date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      // weekday: 'long',
      // hour: 'numeric',
      // minute: 'numeric',
      // second: 'numeric',
  })
  // console.log(result)

  return result
}

app.post("/getbill", async function (req, res) {
  try{
    conpool.query(`SELECT bill.* , customer.mobile , customer.name as name_customer , admin.name as name_admin , service_group.name as name_service FROM bill 
        LEFT JOIN customer on bill.customer_id = customer.id
        LEFT JOIN admin on bill.admin_id = admin.id
        LEFT JOIN service_group on bill.service_group_id = service_group.id
        WHERE bill.id = $1
        Order by bill.id DESC `,[req.body.bill_id]
    ,async (err, result) => {
    if (err) {
    res.status(500).send('Internal Server Error');
    } else {
    for(let bill of result.rows){
        bill.detail = (await conpool.query(`SELECT bill_detail.* , service.title FROM bill_detail LEFT JOIN service on service.id = bill_detail.service_id WHERE bill_id = $1 `, [bill.id])).rows
    }
    let company = (await conpool.query(`SELECT * FROM setting WHERE id = 1 `, [])).rows
    // console.log(company)
    res.status(200).json({
        status: "success",
        bill: result.rows,
        company : company[0]
    });
    }
    });
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/register", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM customer WHERE mobile = $1 `,
      [req.body.mobile],
      async (err, result) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {  
          let data = result.rows[0]
          if(data != undefined || data != null){
            conpool.query(`UPDATE customer SET mobile = $1 , name = $2 , line_id = $3 , status = 'use' WHERE id = $4 ` , 
            [req.body.mobile , req.body.name , req.body.user_id , data.id], (err, result) => {
              if (err) {
                res.status(500).send('Internal Server Error');
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
            [req.body.mobile , req.body.name ,  'use' ,  new Date() , req.body.user_id], (err, result) => {
                if (err) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).json({
                        status: "success",
                        message : 'ทำรายการสำเร็จ'
                    });
                }
            });
          }
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
            res.status(500).send('Internal Server Error');
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
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).json({
                status: "success",
                message : 'แก้ไขข้อมูลสำเร็จ'
            });
        }
    });
});

app.post("/upload", verifyToken, (req, res) => {
    if (req.files === null || req.files === undefined) {
        return res.status(400).json({ msg: "No file uploaded" });
    }
    const file = req.files.images;
    file.mv(`${__dirname}/upload/image/${file.name}`, (err) => {
        if (err) {
        console.error(err);
        return res.status(500).send(err);
        } else {
        conpool.query(
            `UPDATE setting SET logo = $1 
                            WHERE id = 1 `,
            [`${file.name}`],
            async (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.json({ status: `success` });
            }
            }
        );
        }
    });
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
const replyTemplate = (token, texts) => {
  texts = Array.isArray(texts) ? texts : [texts];
  return client.replyMessage(
    token,
    texts
  );
};

// callback function to handle a single event
function handleEvent(event) {
  
  switch (event.type) {
    case 'message':
      const message = event.message;
      // console.log(message.type)
      // console.log(event.replyToken)
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
 
  if(message.text == 'ล้างเลย'){
    let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = $1 AND status = 'use' `, [userId])).rows[0]
    if(customer == undefined){
      const message = {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "imageAspectRatio": "rectangle",
          "imageSize": "cover",
          "imageBackgroundColor": "#FFFFFF",
          "title": "สมัครมาชิก",
          "text": "คลิกสมัครสมาชิก",
          "defaultAction": {
            "type": "uri",
            "label": "View detail",
            "uri": `http://188.166.221.231:3388/register?user_id=${userId}`
          },
          "actions": [
            {
              "type": "uri",
              "label": "Register",
              "uri": `http://188.166.221.231:3388/register?user_id=${userId}`
            }
          ]
        }
      };
      return replyTemplate(replyToken, message);
    }else{
      // let bill = (await conpool.query(`SELECT * FROM bill WHERE customer_id = $1 AND status != 'delete' `, [customer.id])).rows[0]
      let date_now = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`
       
      let bill = (await conpool.query(`
      SELECT bill.* , customer.mobile , customer.name as name_customer , admin.name as name_admin , service_group.name as name_service FROM bill 
                  LEFT JOIN customer on bill.customer_id = customer.id
                  LEFT JOIN admin on bill.admin_id = admin.id
                  LEFT JOIN service_group on bill.service_group_id = service_group.id
                  WHERE bill.status != 'delete' AND customer_id = $1 
                  Order by bill.id DESC 
      `, [customer.id ])).rows[0]
      
      if(bill == undefined){
        const message = {
          "type": "flex",
          "altText": "Dr.Carcare",
          "contents": {
            "type": "bubble",
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Dr.Carcare",
                  "weight": "bold",
                  "size": "xl"
                },
                {
                  "type": "text",
                  "text": "วันนี้ยังไม่มีการรับรถมาล้าง",
                  "weight": "bold",
                  "size": "xl"
                },
                // {
                //   "type": "box",
                //   "layout": "baseline",
                //   "margin": "md",
                //   "contents": [
                //     {
                //       "type": "text",
                //       "text": "เวลาประมาณรับรถ",
                //       "size": "sm"
                //     },
                //     {
                //       "type": "text",
                //       "text": "John Doe",
                //       "margin": "sm",
                //       "size": "sm",
                //     }
                //   ]
                // },
                // {
                //   "type": "box",
                //   "layout": "baseline",
                //   "margin": "md",
                //   "contents": [
                //     {
                //       "type": "text",
                //       "text": "เปอร์เซ็นที่ล้างเสร็จ",
                //       "size": "sm"
                //     },
                //     {
                //       "type": "text",
                //       "text": "30%",
                //       "margin": "sm",
                //       "size": "sm",
                //     }
                //   ]
                // },
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
              ]
            }
          }
        }
        return replyTemplate(replyToken, message);
      }else{
        let date_now = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`
       
        let check = (await conpool.query(`
        SELECT bill.* , customer.mobile , customer.name as name_customer , admin.name as name_admin , service_group.name as name_service FROM bill 
          LEFT JOIN customer on bill.customer_id = customer.id
          LEFT JOIN admin on bill.admin_id = admin.id
          LEFT JOIN service_group on bill.service_group_id = service_group.id
          WHERE bill.status != 'delete' AND customer_id = $1 
          Order by bill.id DESC 
        `, [customer.id ])).rows[0]

        // console.log(check)
        // return
        // console.log(date_now)
        // console.log(check)
        // return
        let years = new Date(check.created_date).getFullYear()
        let month = String(new Date(check.created_date).getMonth()+1).padStart(2, '0') 
        let day = String(new Date(check.created_date).getDate()).padStart(2, '0') 
        let hours = String(new Date(check.created_date).getHours()).padStart(2, '0') 
        let minute = String(new Date(check.created_date).getMinutes()).padStart(2, '0') 
        let finitdate = `${years}-${month}-${day} ${hours}:${minute}`
        let image = null 
        if(check.percen == 30 ){
          image = 'https://03a1-2403-6200-8822-2da5-70bf-2247-7096-b7ce.ngrok-free.app/upload/image/image2.png'
        }else if(check.percen == 100 ){
          image = 'https://03a1-2403-6200-8822-2da5-70bf-2247-7096-b7ce.ngrok-free.app/upload/image/image1.png'
        }else if(check.percen == 0 ){
          image = 'https://example.com/flex/images/image.jpg'
        }
        let url = `http://188.166.221.231:3388/bill?bill_id=${check.id}`
        const message = {
          "type": "flex",
          "altText": "Dr.Carcare",
          "contents": {
            "type": "bubble",
            "hero": {
              "type": "image",
              "url": `${image}`,
              // "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
              "size": "full",
              "aspectRatio": "1:1",
              "aspectMode": "cover"
            },
            "body": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Dr.Carcare",
                  "weight": "bold",
                  "size": "xl"
                },
                {
                  "type": "text",
                  "text": "ล้างรถ",
                  "weight": "bold",
                  "size": "xl"
                },
                {
                  "type": "text",
                  "text": "ป้ายทะเบียน",
                  "weight": "bold",
                  "size": "xl"
                },
                {
                  "type": "text",
                  "text": check?.licen == undefined ?  "" : check?.licen,
                  "weight": "bold",
                  "size": "xl"
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "เวลาประมาณล้างเสร็จ",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "text": `${thaiDateNotime(finitdate)}`,
                      "margin": "sm",
                      "size": "sm",
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "เปอร์เซ็นที่ล้างเสร็จ",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "text": `${check.percen}%`,
                      "margin": "sm",
                      "size": "sm",
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ราคา",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "text": `${check.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} บาท`,
                      "margin": "sm",
                      "size": "sm",
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ส่วนลด",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "text": `${check.discount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} บาท`,
                      "margin": "sm",
                      "size": "sm",
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "md",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ยอดรวม",
                      "size": "sm"
                    },
                    {
                      "type": "text",
                      "text": `${check.total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} บาท`,
                      "margin": "sm",
                      "size": "sm",
                    },
                  ]
                },
                {
                  "type": "separator",
                  "color": "#000000"
                },
                {
                  "type": "separator",
                  "color": "#000000"
                },
                {
                  "type": "box",
                  "layout": "baseline",
                  "margin": "md",
                  "contents": [
                      {
                      "type": "text",
                      "text": "การชำระ",
                      "size": "sm"
                      },
                      {
                      "type": "text",
                      "text": `${check.pay == 'no' ? 'ยังไม่ชำระ' :'ชำระแล้ว'}`,
                      "margin": "sm",
                      "size": "sm",
                      }
                  ]
                },
                {
                  "type": "button",
                    "action": {
                      "type": "uri",
                      "label": "บิลค่าบริการ",
                      "uri": url
                    },
                    "style": "primary",
                    "color": "#E040FB"
                },
              ]
            },
            "footer": {
              "type": "box",
              "layout": "vertical",
              "contents": [
                  // {
                  //   "type": "button",
                  //   "style": "primary",
                  //   "color": "#E040FB",
                  //   "action": {
                  //     "type": "message",
                  //     "label": "Qrcode",
                  //     "text": "Qrcode"
                  //   }
                  // }
              ]
            }
          }
        }
        return replyTemplate(replyToken, message);
      }
      // console.log(bill)
    }
    }else if (message.text == 'Promotion'){
      let image = 'https://03a1-2403-6200-8822-2da5-70bf-2247-7096-b7ce.ngrok-free.app/upload/image/promotion.jpeg'
      const message = {
        "type": "flex",
        "altText": "Dr.Carcare",
        "contents": {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": `${image}`,
            "size": "full",
            "aspectRatio": "2:1",
            "aspectMode": "cover"
          },
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                      "type": "button",
                      "style": "primary",
                      "color": "#E040FB",
                      "action": {
                        "type": "message",
                        "label": "สนใจโปรโมชั่น",
                        "text": "สนใจโปรโมชั่น"
                      }
                    }
                ]
              },
              {
                "type": "separator",
                "color": "#000000"
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                    {
                      "type": "button",
                      "style": "primary",
                      "color": "#E040FB",
                      "action": {
                        "type": "message",
                        "label": "สอบถามรายละเอียดเพิ่มเติม",
                        "text": "สอบถามรายละเอียดเพิ่มเติม"
                      }
                    }
                ]
              },
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                // {
                //   "type": "button",
                //   "style": "primary",
                //   "color": "#E040FB",
                //   "action": {
                //     "type": "message",
                //     "label": "Qrcode",
                //     "text": "Qrcode"
                //   }
                // }
            ]
          }
        }
      }
      return replyTemplate(replyToken, message);
    }else if (message.text == 'Member'){
      const message = {
        "type": "flex",
        "altText": "Dr.Carcare",
        "contents": {
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "text",
                "text": "Member",
                "weight": "bold",
                "size": "xl"
              },
              {
                "type": "text",
                "text": "ระบบสมาชิกจะมาเร็วๆนี้",
                "weight": "bold",
                "size": "xl"
              },
              {
                "type": "text",
                "text": "โปรดรอสักครู่",
                "weight": "bold",
                "size": "xl"
              },
            ]
          },
          "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
             
            ]
          }
        }
      }
      return replyTemplate(replyToken, message);
    }else if (message.text == 'Qrcode' || message.text == 'แสกนจ่าย'){
      const message = {
        "type": "image",
        "originalContentUrl": "https://03a1-2403-6200-8822-2da5-70bf-2247-7096-b7ce.ngrok-free.app/upload/image/qrcode.jpeg",
        "previewImageUrl": "https://03a1-2403-6200-8822-2da5-70bf-2247-7096-b7ce.ngrok-free.app/upload/image/qrcode.jpeg"
      }
      return replyTemplate(replyToken, message);
    }
    else if (message.text == 'สอบถามรายละเอียดเพิ่มเติม'){
      let message = {
        "type": "text",
        "text": "ติดต่อสอบถามโทร 0652544666"
      }
      return replyTemplate(replyToken, message);
    }
//   if(message.text == 'สมัครสมาชิก'){
//     let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = $1 AND status = true `, [userId])).rows[0]
//     if(customer != undefined || customer != null){
//       return replyText(replyToken, `ท่านเป็นสมาชิกอยู่แล้ว คุณ${customer.name}`);
//     }else{
//       return replyText(replyToken, `ท่านยังไม่เป็นสมาชิก โปรลงทะเบียน : http://188.166.221.231:3388/register?user_id=${userId}`);
//     }
//   }else if (message.text == 'เข้าสู่ระบบ'){
//     let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = $1 AND status = true `, [userId])).rows[0]
//     if(customer != undefined || customer != null){
//       return replyText(replyToken, `เข้าสู่ระบบเรียบร้อย คุณ${customer.name}`);
//     }else{
//       return replyText(replyToken, `ท่านยังไม่เป็นสมาชิก โปรลงทะเบียน : http://188.166.221.231:3388/register?user_id=${userId}`);
//     }
//   }else if (message.text == 'ตรวจสอบสถานะรถ'){
//     return replyText(replyToken, 'ยังไม่มีการฝากล้างรถ');
//   }else if (message.text == 'สมาชิก'){
//     let customer = (await conpool.query(`SELECT * FROM customer WHERE line_id = $1 AND status = true `, [userId])).rows[0]
//     if(customer != undefined || customer != null){
//       return replyText(replyToken, `
// รายละเอียดสมาชิก
// ลูกค้าชื่อ :${customer.name}
// คะแนนสะสม :${customer.point}
// เบอร์โทรติดต่อ :${customer.mobile}
//       `);
//     }else{
//       return replyText(replyToken, `ท่านยังไม่เป็นสมาชิก โปรลงทะเบียน : http://188.166.221.231:3388/register?user_id=${userId}`);
//     }
//   }
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
  return replyText(replyToken, '');
}

app.get('/download_csv',(req, res) => {
  res.download('data.csv');
});

app.listen(port, function () {
  // console.log(process.env.PORT)
  console.log(`App listening on port ${port}!`);
});