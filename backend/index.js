const express = require("express");
const app = express();
const port = 4600;
const conpool = require("./Connect/db_connect");
var cors = require("cors");
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;
const fileUpload = require("express-fileupload");
var bcrypt = require("bcrypt");
const nodemailer = require('nodemailer');

const verifyToken = (req, res, next) => {
  let token = req.headers["authorization"];
  jwt.verify(token, secretKey, (err, payload) => {
    if (err) {
      res.status(401).json({ status: err.message });
    } else {
      if (Date.now() >= payload.exp * 1000) {
      } else {
        req.payload = payload;
        next();
      }
    }
  });
};
const admin = require("./Router/router_admins");
const services = require("./Router/router_services");
const customers = require("./Router/router_customers");
const company = require("./Router/router_company");

app.use("/upload", express.static("upload"));
app.use("/upload/logo", express.static("upload/logo"));

app.use(bodyParser.json());
app.use(cors());

app.use(fileUpload());

app.use("/admins", verifyToken , admin);
app.use("/services", verifyToken , services);
app.use("/customers", verifyToken , customers);
app.use("/company", verifyToken , company);

app.get("/", function (req, res) {
  res.send("Api It Working !");
});

app.post("/login", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM admin WHERE username = ($1) `,
      [req.body.username],
      async (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            let admin = result.rows[0]
            // console.log(admin.status)
            // return
            
            if (admin) {
              if(admin.status == false){
                return res.status(401).json({
                  status: "error",
                  message: "บัญชีถูกระงับการใช้งาน",
                });
              }
              let password = await bcrypt.compareSync(req.body.password, admin.password)
              if (password) {
                let payload = {
                  id: admin.id,
                  username: admin.username,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
                };
                let token = jwt.sign(payload, secretKey);
                res.status(200).json({
                  status: "success",
                  token: token,
                  data: admin,
                });
              } else {
                res.status(401).json({
                  status: "error",
                  message: "Username or Password is incorrect",
                });
              }
            }else{
              res.status(401).json({
                status: "error",
                message: "Username or Password is invalid",
            });
          }
        }
      }
    )
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/register", async function (req, res) {
  try{
    console.log(req.body)
    return
    conpool.query(
      `SELECT * FROM admin WHERE username = ($1) `,
      [req.body.username],
      async (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            let admin = result.rows[0]
            // console.log(admin.status)
            // return
            
            if (admin) {
              if(admin.status == false){
                return res.status(401).json({
                  status: "error",
                  message: "บัญชีถูกระงับการใช้งาน",
                });
              }
              let password = await bcrypt.compareSync(req.body.password, admin.password)
              if (password) {
                let payload = {
                  id: admin.id,
                  username: admin.username,
                  exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
                };
                let token = jwt.sign(payload, secretKey);
                res.status(200).json({
                  status: "success",
                  token: token,
                  data: admin,
                });
              } else {
                res.status(401).json({
                  status: "error",
                  message: "Username or Password is incorrect",
                });
              }
            }else{
              res.status(401).json({
                status: "error",
                message: "Username or Password is invalid",
            });
          }
        }
      }
    )
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/login/customer", async function (req, res) {
  try{
    conpool.query(
      `SELECT * FROM customer WHERE mobile = ($1) `,
      [req.body.mobile],
      async (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            let customer = result.rows[0]
            // console.log(customer)
            // return
            if (customer) {
              if(customer.status == false){
                return res.status(501).json({
                  status: "error",
                  message: "บัญชีถูกระงับการใช้งาน",
                });
              }
              let payload = {
                id: customer.id,
                username: customer.name,
                exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
              };
              let token = jwt.sign(payload, secretKey);
              res.status(200).json({
                status: "success",
                token: token,
                data: customer,
              });
            }else{
              res.status(401).json({
                status: "error",
                message: "Member is invalid",
            });
          }
        }
      }
    )
  }catch(error){
    res.status(400).json({ status: error.message });
  }
});

app.post("/chang-password", verifyToken, async(req, res) => {
  conpool.query(`UPDATE admin SET password = $1  WHERE id = $2 ` , 
    [await bcrypt.hashSync(req.body.password, 12) , req.body.id ], (err, result) => {
        if (err) {
            throw Error(err);
        } else {
            res.status(200).json({
                status: "success",
                message : 'แก้ไขข้อมูลสำเร็จ'
            });
        }
    });
});

app.post("/upload", verifyToken, (req, res) => {
    // if (req.files === null || req.files === undefined) {
    //     return res.status(400).json({ msg: "No file uploaded" });
    // }

    // const file = req.files.file;
    console.log(req.body.fileName)
    // file.mv(`${__dirname}/upload/image/${file.name}`, (err) => {
    //     if (err) {
    //     console.error(err);
    //     return res.status(500).send(err);
    //     } else {
    //     conpool.query(
    //         `UPDATE tb_company SET image_logo = $1 
    //                         WHERE id = $2 `,
    //         [`${file.name}`, req.payload.id],
    //         async (err, result) => {
    //         if (err) {
    //             throw Error(err);
    //         } else {
    //             res.json({ status: `success` });
    //         }
    //         }
    //     );
    //     }
    // });
});

app.get('/download_csv',(req, res) => {
  res.download('data.csv');
});

app.listen(port, function () {
  // console.log(process.env.PORT)
  console.log(`App listening on port ${port}!`);
});