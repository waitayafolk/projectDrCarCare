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
        if(req.body.id == 0 ){
            db.query(`INSERT INTO admin ( username, password , name  , code , role , status , create_date ) 
            VALUES ($1 , $2 , $3  , $4 ,$5 ,$6 ,$7 ) ` , 
            [req.body.username , await bcrypt.hashSync(req.body.password, 12) ,  req.body.name ,  req.body.code ,  req.body.role ,  req.body.status ,  new Date()], (err, result) => {
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
            db.query(`UPDATE admin SET name = $1 , username = $2 , code = $3 , role = $4 , status = $5 WHERE id = $6 ` , 
            [req.body.name , req.body.username , req.body.code , req.body.role, req.body.status , req.body.id], (err, result) => {
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