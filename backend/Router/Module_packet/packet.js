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
