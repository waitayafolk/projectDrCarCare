var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

exports.getPacket = async (req, res) => {
    try{
        db.query(`SELECT * FROM packet WHERE status != 'delete'`, [] , (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json({
                    status: "success",
                    message: "Success full",
                    data :  result.rows
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.packet_sale = async (req, res) => {
    try{
        db.query(`SELECT packet_buy.* , customer.mobile , customer.name 
                FROM packet_buy 
                LEFT JOIN customer on customer.id = packet_buy.customer_id
                LEFT JOIN packet on packet.id = packet_buy.packet_id
                WHERE packet_buy.count > 0`, [] , (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json({
                    status: "success",
                    message: "Success full",
                    data :  result.rows
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.save_packet = async (req, res) => {
    try{
        db.query(`INSERT INTO packet_buy ( customer_id, packet_id , count  , licen , created_date   ) 
        VALUES ($1 , $2 , $3  , $4 ,$5   ) ` , 
        [req.body.customer_id , req.body.packet_id ,  req.body.count , req.body.licen , new Date() ], async(err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                await db.query(`INSERT INTO bill ( price, discount , total  , service_group_id , admin_id , customer_id , percen ,status , created_date , pay , licen , pay_type ) 
                VALUES ($1 , $2 , $3  , $4 ,$5 ,$6 ,$7 , 'success' , $8 , 'yes' , $9 , 'cash' )  `, 
                [req.body.price , 0 ,  req.body.price ,  0 ,  req.payload.id ,  req.body.customer_id , 100 , new Date() , req.body.licen ])
                res.status(200).json({
                    status: "success",
                    message : 'ซื้อแพ็คเกจสำเร็จ'
                });
            }
        });
        
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.del = async (req, res) => {
    try{
        db.query(`UPDATE packet SET status = 'delete' WHERE id = $1`, [req.params.id] , (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json({
                    status: "success",
                    message: "Success full",
                    data :  result.rows
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}


exports.save = async (req, res) => {
    try{
        if(req.body.id == 0 ){
            db.query(`INSERT INTO packet ( title, detail , price  , count , status , created_date  ) 
            VALUES ($1 , $2 , $3  , $4 ,$5 ,$6  ) ` , 
            [req.body.title , req.body.detail ,  req.body.price , req.body.count ,  'use' , new Date() ], (err, result) => {
                if (err) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).json({
                        status: "success",
                        message : 'เพิ่มข้อมูลสำเร็จ'
                    });
                }
            });
        }else{
            db.query(`UPDATE packet SET title = $1 , detail = $2 , price = $3 , count = $4 , created_date = $5  WHERE id = $6 ` , 
            [req.body.title , req.body.detail , req.body.price , req.body.count , new Date() ,req.body.id], (err, result) => {
                if (err) {
                    res.status(500).send('Internal Server Error');
                } else {
                    res.status(200).json({
                        status: "success",
                        message : 'แก้ไขข้อมูลสำเร็จ'
                    });
                }
            });
            
        }
    }catch(err){
        res.status(400).json({status: "error", message : err.message, });
    }
}
