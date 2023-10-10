var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

exports.day = async (req, res) => {
    try{
        db.query(`SELECT SUM(bill.total) AS total , DATE(bill.created_date) AS Date 
        FROM bill 
        LEFT JOIN customer on bill.customer_id = customer.id
        LEFT JOIN admin on bill.admin_id = admin.id
        LEFT JOIN service_group on bill.service_group_id = service_group.id
        WHERE bill.pay = 'yes' AND  bill.status != 'delete' AND DATE(bill.created_date) BETWEEN $1 AND $2 GROUP BY DATE(bill.created_date) 
        Order by DATE(bill.created_date) DESC `, [req.body.start_date , req.body.end_date ], async(err, result) => {
            if (err) {
                console.log(err.message)
                res.status(500).send('Internal Server Error');
            } else {
                // console.log(result.rows)
                // let cash = (await db.query(``, [])).rows[0]
                for(let item of result.rows){
                    // console.log(item)
                    let date = `${new Date(item.date).getFullYear()}-${String(new Date(item.date).getMonth()+1).padStart(2,'0')}-${String(new Date(item.date).getDate()).padStart(2,'0')}`
                    item.cash = 0 
                    item.credit = 0 
                    let cash = (await db.query(`SELECT SUM(bill.total) AS total 
                                    FROM bill 
                                    LEFT JOIN customer on bill.customer_id = customer.id
                                    LEFT JOIN admin on bill.admin_id = admin.id
                                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                                    WHERE bill.pay = 'yes' AND  bill.pay_type = 'cash' AND bill.status != 'delete' AND DATE(bill.created_date) = $1 GROUP BY DATE(bill.created_date) 
                                    Order by DATE(bill.created_date) DESC`, [date])).rows[0]
                    let credit = (await db.query(`SELECT SUM(bill.total) AS total 
                                    FROM bill 
                                    LEFT JOIN customer on bill.customer_id = customer.id
                                    LEFT JOIN admin on bill.admin_id = admin.id
                                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                                    WHERE bill.pay = 'yes' AND bill.pay_type = 'credit' AND bill.status != 'delete' AND DATE(bill.created_date) = $1 GROUP BY DATE(bill.created_date) 
                                    Order by DATE(bill.created_date) DESC`, [date])).rows[0]
                    if(cash != undefined){
                        item.cash = cash.total
                    }

                    if(credit != undefined){
                        item.credit = credit.total
                    }
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

exports.getBill = async (req, res) => {
    try{
        
        // let date_now = `${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`
        db.query(`SELECT bill.* , customer.mobile , customer.name as name_customer , admin.name as name_admin , service_group.name as name_service FROM bill 
                    LEFT JOIN customer on bill.customer_id = customer.id
                    LEFT JOIN admin on bill.admin_id = admin.id
                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                    WHERE bill.status = 'success' AND DATE(bill.created_date) = $1
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

exports.month = async (req, res) => {
    try{
        db.query(`SELECT SUM(bill.total) AS total , DATE(bill.created_date) AS Date 
        FROM bill 
        LEFT JOIN customer on bill.customer_id = customer.id
        LEFT JOIN admin on bill.admin_id = admin.id
        LEFT JOIN service_group on bill.service_group_id = service_group.id
        WHERE bill.pay = 'yes' AND  bill.status != 'delete' AND DATE(bill.created_date) BETWEEN $1 AND $2 GROUP BY DATE(bill.created_date) 
        Order by DATE(bill.created_date) DESC `, [req.body.start_date , req.body.end_date ], async(err, result) => {
            if (err) {
                console.log(err.message)
                res.status(500).send('Internal Server Error');
            } else {
                // console.log(result.rows)
                // let cash = (await db.query(``, [])).rows[0]
                for(let item of result.rows){
                    // console.log(item)
                    let date = `${new Date(item.date).getFullYear()}-${String(new Date(item.date).getMonth()+1).padStart(2,'0')}-${String(new Date(item.date).getDate()).padStart(2,'0')}`
                    item.cash = 0 
                    item.credit = 0 
                    let cash = (await db.query(`SELECT SUM(bill.total) AS total 
                                    FROM bill 
                                    LEFT JOIN customer on bill.customer_id = customer.id
                                    LEFT JOIN admin on bill.admin_id = admin.id
                                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                                    WHERE bill.pay = 'yes' AND  bill.pay_type = 'cash' AND bill.status != 'delete' AND DATE(bill.created_date) = $1 GROUP BY DATE(bill.created_date) 
                                    Order by DATE(bill.created_date) DESC`, [date])).rows[0]
                    let credit = (await db.query(`SELECT SUM(bill.total) AS total 
                                    FROM bill 
                                    LEFT JOIN customer on bill.customer_id = customer.id
                                    LEFT JOIN admin on bill.admin_id = admin.id
                                    LEFT JOIN service_group on bill.service_group_id = service_group.id
                                    WHERE bill.pay = 'yes' AND bill.pay_type = 'credit' AND bill.status != 'delete' AND DATE(bill.created_date) = $1 GROUP BY DATE(bill.created_date) 
                                    Order by DATE(bill.created_date) DESC`, [date])).rows[0]
                    if(cash != undefined){
                        item.cash = cash.total
                    }

                    if(credit != undefined){
                        item.credit = credit.total
                    }
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

exports.dashbord = async (req, res) => {
    try{

        let customer = (await db.query(`SELECT COUNT(id) AS count  FROM customer WHERE status != 'delete' `, [])).rows[0]
        let bill = (await db.query(`SELECT COUNT(id) AS count  FROM bill WHERE status != 'delete' `, [])).rows[0]
        let billDate = (await db.query(`SELECT COUNT(id) AS count  FROM bill WHERE  DATE(created_date) = $1 AND status != 'delete' `, [`${new Date().getFullYear()}-${String(new Date().getMonth()+1).padStart(2,'0')}-${String(new Date().getDate()).padStart(2,'0')}`])).rows[0]
        let billMonth = (await db.query(`SELECT COUNT(id) AS count  FROM bill WHERE  EXTRACT(MONTH FROM created_date) = $1 AND status != 'delete'`, [new Date().getMonth()+1])).rows[0]
        let service = (await db.query(`SELECT COUNT(id) AS count  FROM service_group WHERE status != 'delete' `, [])).rows[0]
        let result = {
            customer : customer.count ,
            bill : bill.count ,
            billDate : billDate.count ,
            billMonth : billMonth.count ,
            service : service.count ,
        }
        res.status(200).json({
            status: "success",
            data: result,
        });
    }catch(err){
         res.status(400).json({status: "error", message : err.message, });
    }
}
