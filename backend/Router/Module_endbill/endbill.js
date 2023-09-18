var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

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
        db.query(`INSERT INTO bill ( price, discount , total  , service_group_id , admin_id , customer_id , percen ,status , created_date ) 
        VALUES ($1 , $2 , $3  , $4 ,$5 ,$6 ,$7 , 'wait' , $8 ) returning id ` , 
        [price , discount ,  total ,  req.body.service_group_id ,  req.payload.id ,  req.body.customer_id , 0 , new Date()], async(err, result) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            } else {
                let bill_id = result.rows[0].id
                for(let detail of req.body.service){
                    await db.query(`INSERT INTO bill_detail ( bill_id , service_id , price  , discount , total , status  )
                    VALUES ($1 , $2 , $3  , $4 ,$5 ,'use' )
                    `, [bill_id , detail.id , detail.price , detail.discount , detail.price - detail.discount  ])
                }
                res.status(200).json({
                    status: "success",
                    message : 'เพิ่มข้อมูลสำเร็จ'
                });
            }
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}

exports.getBill = async (req, res) => {
    try{
        db.query(`SELECT bill.* , customer.mobile , customer.name as name_customer , admin.name as name_admin , service_group.name as name_service FROM bill 
                    LEFT JOIN customer on bill.customer_id = customer.id
                    LEFT JOIN admin on bill.admin_id = admin.id
                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                    WHERE bill.status != 'delete' 
                    Order by bill.id DESC `
        ,async (err, result) => {
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
        let status = 'wait'
        if(req.body.percen == 100){
            status = 'success'
        }
        db.query(`UPDATE bill SET percen = $1 , admin_id = $2 ,status = $3 WHERE id = $4 ` , 
        [req.body.percen , req.payload.id , status , req.body.bill_id  ], (err, result) => {
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

// exports.deleteServiceGroup = async (req, res) => {
//     try{
//         db.query(`UPDATE service_group SET status = 'delete' WHERE id = $1 `, [req.params.id] , (err, result) => {
//             if (err) {
//                 res.status(500).send('Internal Server Error');
//             } else {
//                 res.status(200).json({
//                     status: "success",
//                     message: "Success full",
//                 });
//             }
//         });
//     }catch(err){
//          res.status(400).json({status: "error", message : err.message, });
//     }
// }

// exports.getServiceGroup = async (req, res) => {
//     try{
//         db.query(`SELECT * FROM service_group WHERE status != 'delete' Order by id DESC `, (err, result) => {
//             if (err) {
//                 res.status(500).send('Internal Server Error');
//             } else {
//                 res.status(200).json({
//                     status: "success",
//                     data: result.rows,
//                 });
//             }
//         });
//     }catch(err){
//          res.status(400).json({status: "error", message : err.message, });
//     }
// }

// exports.saveServiceGroup = async (req, res) => {
//     try{
//         if(req.body.id == 0 ){
//             db.query(`INSERT INTO service_group ( code, name , detail  , status , admin_id , create_date ) 
//             VALUES ($1 , $2 , $3  , $4 ,$5 ,$6  ) ` , 
//             [req.body.code , req.body.name ,  req.body.detail ,  'use' ,  req.body.admin_id ,  new Date()], (err, result) => {
//                 if (err) {
//                     res.status(500).send('Internal Server Error');
//                 } else {
//                     res.status(200).json({
//                         status: "success",
//                         message : 'เพิ่มข้อมูลสำเร็จ'
//                     });
//                 }
//             });
//         }else{
//             db.query(`UPDATE service_group SET code = $1 , name = $2 , detail = $3 , status = $4 , admin_id = $5 WHERE id = $6 ` , 
//             [req.body.code , req.body.name , req.body.detail , 'use' , req.body.admin_id , req.body.id], (err, result) => {
//                 if (err) {
//                     res.status(500).send('Internal Server Error');
//                 } else {
//                     res.status(200).json({
//                         status: "success",
//                         message : 'แก้ไขข้อมูลสำเร็จ'
//                     });
//                 }
//             });
            
//         }
//     }catch(err){
//          res.status(400).json({status: "error", message : err.message, });
//     }
// }

// exports.getServiceByid = async (req, res) => {
//     try{
//         db.query(`SELECT * FROM service WHERE status != 'delete' and service_group_id = $1`,[req.params.id], (err, result) => {
//             if (err) {
//                 res.status(500).send('Internal Server Error');
//             } else {
//                 res.status(200).json({
//                     status: "success",
//                     data: result.rows,
//                 });
//             }
//         });
//     }catch(err){
//          res.status(400).json({status: "error", message : err.message, });
//     }
// }