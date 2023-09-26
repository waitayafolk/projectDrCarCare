var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");
const line = require('@line/bot-sdk');
const config = require('../../config.json');
const client = new line.Client(config);
function thaiDateNotime (data){
    const date = new Date(data)
  
    const result = date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        // weekday: 'long',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric',
    })
    // console.log(result)
  
    return result
  }

exports.endbill = async (req, res) => {
    try{
        let total = 0
        let discount = 0
        let price = 0
        for(let item of req.body.service){
            total += item.price - item.discount
            discount += item.discount
            price += item.price
        }
        db.query(`INSERT INTO bill ( price, discount , total  , service_group_id , admin_id , customer_id , percen ,status , created_date , pay , licen ) 
        VALUES ($1 , $2 , $3  , $4 ,$5 ,$6 ,$7 , 'wait' , $8 , 'no' , $9 ) returning id ` , 
        [price , discount ,  total ,  req.body.service_group_id ,  req.payload.id ,  req.body.customer_id , 0 , new Date() , req.body.licen ], async(err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                let bill_id = result.rows[0].id
                for(let detail of req.body.service){
                    await db.query(`INSERT INTO bill_detail ( bill_id , service_id , price  , discount , total , status  )
                    VALUES ($1 , $2 , $3  , $4 ,$5 ,'use' )
                    `, [bill_id , detail.id , detail.price , detail.discount , detail.price - detail.discount  ])
                }

                let check = (await db.query(`
                SELECT bill.* , customer.mobile , customer.name as name_customer , customer.line_id,
                admin.name as name_admin , service_group.name as name_service 
                            FROM bill 
                            LEFT JOIN customer on bill.customer_id = customer.id
                            LEFT JOIN admin on bill.admin_id = admin.id
                            LEFT JOIN service_group on bill.service_group_id = service_group.id
                            WHERE bill.status != 'delete' AND bill.id = $1
                            Order by bill.id DESC 
                `, [bill_id])).rows[0]

                let years = new Date(check.created_date).getFullYear()
                let month = String(new Date(check.created_date).getMonth()+1).padStart(2, '0') 
                let day = String(new Date(check.created_date).getDate()).padStart(2, '0') 
                let hours = String(new Date(check.created_date).getHours()+1).padStart(2, '0') 
                let minute = String(new Date(check.created_date).getMinutes()).padStart(2, '0') 
                let finitdate = `${years}-${month}-${day} ${hours}:${minute}`
                let image = null 
                if(check.percen == 30 ){
                    image = 'https://7bb6-223-205-239-231.ngrok-free.app/upload/image/image2.png'
                }else if(check.percen == 100 ){
                    image = 'https://7bb6-223-205-239-231.ngrok-free.app/upload/image/image1.png'
                }else if(check.percen == 0 ){
                    image = 'https://example.com/flex/images/image.jpg'
                }
                let url = `http://188.166.221.231:3388/bill?bill_id=${bill_id}`
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
                            }
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
                                "text": `ยังไม่ชำระ`,
                                "margin": "sm",
                                "size": "sm",
                                }
                            ]
                        },
                    ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "buttons",
                                "imageAspectRatio": "rectangle",
                                "imageSize": "cover",
                                "imageBackgroundColor": "#FFFFFF",
                                "title": "สมัครมาชิก",
                                "text": "คลิกสมัครสมาชิก",
                                "defaultAction": {
                                    "type": "uri",
                                    "label": "View detail",
                                    "uri": `http://188.166.221.231:3388/bill?bill_id=${check.id}`
                                },
                                "actions": [
                                    {
                                    "type": "uri",
                                    "label": "Register",
                                    "uri": `http://188.166.221.231:3388/bill?bill_id=${check.id}`
                                    }
                                ]
                            }
                        ]
                    }
                    
                }
                }
                
                res.status(200).json({
                    status: "success",
                    message : 'เพิ่มข้อมูลสำเร็จ'
                });
                return replyTemplate(check.line_id, message);
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.getBill = async (req, res) => {
    try{
        
        // let date_now = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`
        db.query(`SELECT bill.* , customer.mobile , customer.name as name_customer , admin.name as name_admin , service_group.name as name_service FROM bill 
                    LEFT JOIN customer on bill.customer_id = customer.id
                    LEFT JOIN admin on bill.admin_id = admin.id
                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                    WHERE bill.status != 'delete' AND DATE(bill.created_date) = $1
                    Order by bill.id DESC `
        ,[req.body.date],async (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                for(let bill of result.rows){
                    bill.detail = (await db.query(`SELECT bill_detail.* , service.title FROM bill_detail LEFT JOIN service on service.id = bill_detail.service_id WHERE bill_id = $1 `, [bill.id])).rows
                }
                res.status(200).json({
                    status: "success",
                    data: result.rows,
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.update = async (req, res) => {
    try{
        let replyToken = 'nHuyWiB7yP5Zw52FIkcQobQuGDXCTA'
        let status = 'wait'
        if(req.body.percen == 100){
            status = 'success'
        }
        db.query(`UPDATE bill SET percen = $1 , admin_id = $2 ,status = $3 WHERE id = $4 ` , 
        [req.body.percen , req.payload.id , status , req.body.bill_id  ], async(err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                
                let check = (await db.query(`
                SELECT bill.* , customer.mobile , customer.name as name_customer , customer.line_id,
                admin.name as name_admin , service_group.name as name_service 
                            FROM bill 
                            LEFT JOIN customer on bill.customer_id = customer.id
                            LEFT JOIN admin on bill.admin_id = admin.id
                            LEFT JOIN service_group on bill.service_group_id = service_group.id
                            WHERE bill.status != 'delete' AND bill.id = $1
                            Order by bill.id DESC 
                `, [req.body.bill_id])).rows[0]
                
                let years = new Date(check.created_date).getFullYear()
                let month = String(new Date(check.created_date).getMonth()+1).padStart(2, '0') 
                let day = String(new Date(check.created_date).getDate()).padStart(2, '0') 
                let hours = String(new Date(check.created_date).getHours()+1).padStart(2, '0') 
                let minute = String(new Date(check.created_date).getMinutes()).padStart(2, '0') 
                let finitdate = `${years}-${month}-${day} ${hours}:${minute}`
                let image = null 
                if(check.percen == 30 ){
                    image = 'https://7bb6-223-205-239-231.ngrok-free.app/upload/image/image2.png'
                }else if(check.percen == 100 ){
                    image = 'https://7bb6-223-205-239-231.ngrok-free.app/upload/image/image1.png'
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
                            }
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
                    ]
                    },
                    "footer": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "buttons",
                                "imageAspectRatio": "rectangle",
                                "imageSize": "cover",
                                "imageBackgroundColor": "#FFFFFF",
                                "title": "สมัครมาชิก",
                                "text": "คลิกสมัครสมาชิก",
                                "defaultAction": {
                                    "type": "uri",
                                    "label": "View detail",
                                    "uri": `http://188.166.221.231:3388/bill?bill_id=${check.id}`
                                },
                                "actions": [
                                    {
                                    "type": "uri",
                                    "label": "Register",
                                    "uri": `http://188.166.221.231:3388/bill?bill_id=${check.id}`
                                    }
                                ]
                            }
                        ]
                    }
                }
                }
                res.status(200).json({
                    status: "success",
                    message : 'แก้ไขข้อมูลสำเร็จ'
                });
                return replyTemplate(check.line_id, message);
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.pay = async (req, res) => {
    try{
        db.query(`UPDATE bill SET pay = 'yes' , pay_type = $1 WHERE id = $2 ` , 
        [req.body.pay , req.body.bill_id ], async(err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                let check = (await db.query(`
                SELECT bill.* , customer.mobile , customer.name as name_customer , customer.line_id,
                admin.name as name_admin , service_group.name as name_service 
                            FROM bill 
                            LEFT JOIN customer on bill.customer_id = customer.id
                            LEFT JOIN admin on bill.admin_id = admin.id
                            LEFT JOIN service_group on bill.service_group_id = service_group.id
                            WHERE bill.status != 'delete' AND bill.id = $1
                            Order by bill.id DESC 
                `, [req.body.bill_id])).rows[0]
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
                            "text": "ชำระค่าบริการ",
                            "weight": "bold",
                            "size": "xl"
                          },
                          {
                            "type": "text",
                            "text": "ท่านชำระค่าบริการแล้ว",
                            "weight": "bold",
                            "size": "xl"
                          },
                          {
                            "type": "text",
                            "text": "ขอบคุณที่ใช้บริการกับเรา",
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
                res.status(200).json({
                    status: "success",
                    message : 'แก้ไขข้อมูลสำเร็จ'
                });
                return replyTemplate(check.line_id, message);
                
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}
const replyTemplate = (token, texts) => {
    texts = Array.isArray(texts) ? texts : [texts];
    return client.pushMessage(
        token,
        texts
    );
};

exports.del = async (req, res) => {
    try{
        db.query(`UPDATE bill SET status = 'delete' WHERE id = $1 ` , 
        [req.params.id], async(err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json({
                    status: "success",
                    message : 'ลบข้อมูลสำเร็จ'
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}