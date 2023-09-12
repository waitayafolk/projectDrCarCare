var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

exports.getCustimer = async (req, res) => {
    try{
        db.query(`SELECT * FROM customer WHERE status != 'delete' Order by id DESC `, (err, result) => {
            if (err) {
                throw Error(err);
            } else {
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

exports.saveCustomer = async (req, res) => {
    try{
        if(req.body.id == 0 ){
            db.query(`INSERT INTO customer ( mobile , name , status , create_date ) 
            VALUES ($1 , $2 , $3  , $4 ) ` , 
            [req.body.mobile , req.body.name ,  'use' ,  new Date()], (err, result) => {
                if (err) {
                    throw Error(err);
                } else {
                    res.status(200).json({
                        status: "success",
                        message : 'เพิ่มข้อมูลสำเร็จ'
                    });
                }
            });
        }else{
            db.query(`UPDATE customer SET mobile = $1 , name = $2 , status = $3 WHERE id = $4 ` , 
            [req.body.mobile , req.body.name , 'use' , req.body.id], (err, result) => {
                if (err) {
                    throw Error(err);
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