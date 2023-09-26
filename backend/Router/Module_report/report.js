var db = require("../../Connect/db_connect");
var bcrypt = require("bcrypt");

exports.day = async (req, res) => {
    try{
        db.query(`SELECT SUM(bill.total) AS total , DATE(bill.created_date) AS Date  FROM bill 
        LEFT JOIN customer on bill.customer_id = customer.id
        LEFT JOIN admin on bill.admin_id = admin.id
        LEFT JOIN service_group on bill.service_group_id = service_group.id
        WHERE bill.status != 'delete' AND DATE(bill.created_date) BETWEEN $1 AND $2 GROUP BY DATE(bill.created_date)    
        Order by DATE(bill.created_date) DESC `, [req.body.start_date , req.body.end_date ], (err, result) => {
            if (err) {
                console.log(err.message)
                res.status(500).send('Internal Server Error');
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