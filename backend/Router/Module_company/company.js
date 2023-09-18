var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

exports.getCompany = async (req, res) => {
    try{
        db.query(`SELECT * FROM setting WHERE id = 1 `, (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json({
                    status: "success",
                    data: result.rows[0],
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.saveCompany = async (req, res) => {
    try{
        db.query(`UPDATE setting SET company_name = $1 , address = $2 , mobile = $3 , line = $4 , facebook = $5 WHERE id = 1 ` , 
        [req.body.company_name , req.body.address , req.body.mobile , req.body.line, req.body.facebook ], (err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                res.status(200).json({
                    status: "success",
                    message : 'แก้ไขข้อมูลสำเร็จ'
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}