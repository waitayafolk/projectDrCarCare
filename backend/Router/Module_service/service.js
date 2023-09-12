var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

exports.deleteService = async (req, res) => {
    try{
        db.query(`UPDATE service SET status = 'delete' WHERE id = $1 `, [req.params.id] , (err, result) => {
            if (err) {
                throw Error(err);
            } else {
                res.status(200).json({
                    status: "success",
                    message: "Success full",
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.getService = async (req, res) => {
    try{
        db.query(`SELECT * FROM service WHERE status != 'delete' Order by id DESC `, (err, result) => {
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

exports.saveService = async (req, res) => {
    try{
        if(req.body.id == 0 ){
            db.query(`INSERT INTO service ( title, detail , price  , status , admin_id , create_date , service_group_id ) 
            VALUES ($1 , $2 , $3  , $4 ,$5 ,$6 ,$7 ) ` , 
            [req.body.title , req.body.detail ,  req.body.price ,  'use' ,  req.body.admin_id ,  new Date() , req.body.service_group_id], (err, result) => {
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
            db.query(`UPDATE service SET title = $1 , detail = $2 , price = $3 , status = $4 , admin_id = $5 , service_group_id = $6WHERE id = $7 ` , 
            [req.body.title , req.body.detail , req.body.price , 'use', req.body.admin_id ,req.body.service_group_id , req.body.id], (err, result) => {
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

exports.deleteServiceGroup = async (req, res) => {
    try{
        db.query(`UPDATE service_group SET status = 'delete' WHERE id = $1 `, [req.params.id] , (err, result) => {
            if (err) {
                throw Error(err);
            } else {
                res.status(200).json({
                    status: "success",
                    message: "Success full",
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.getServiceGroup = async (req, res) => {
    try{
        db.query(`SELECT * FROM service_group WHERE status != 'delete' Order by id DESC `, (err, result) => {
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

exports.saveServiceGroup = async (req, res) => {
    try{
        if(req.body.id == 0 ){
            db.query(`INSERT INTO service_group ( code, name , detail  , status , admin_id , create_date ) 
            VALUES ($1 , $2 , $3  , $4 ,$5 ,$6  ) ` , 
            [req.body.code , req.body.name ,  req.body.detail ,  'use' ,  req.body.admin_id ,  new Date()], (err, result) => {
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
            db.query(`UPDATE service_group SET code = $1 , name = $2 , detail = $3 , status = $4 , admin_id = $5 WHERE id = $6 ` , 
            [req.body.code , req.body.name , req.body.detail , 'use' , req.body.admin_id , req.body.id], (err, result) => {
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

exports.getServiceByid = async (req, res) => {
    try{
        db.query(`SELECT * FROM service WHERE status != 'delete' and service_group_id = $1`,[req.params.id], (err, result) => {
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