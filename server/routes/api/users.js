const { json } = require("body-parser");
const express = require("express");
const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"RTP_DB"   
})
con.connect(function(err) {if(err)throw err});

const router = express.Router();

//get posts

router.get("/",(req,res)=>{
    var data;
    con.query(
        "select 'first_name',first_name,'last_name',last_name,'username',username,'password',password FROM users",
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
            
        }
    )
})
router.get("/:username",(req,res)=>{
    var data;
    con.query(
        `select 'first_name',first_name,'last_name',last_name,'username',username,'password',password FROM users where username = '${req.params.username}'`,
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
            
        }
    )
})




module.exports = router;