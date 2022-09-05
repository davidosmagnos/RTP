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
    con.query(
        `select 'first_name',first_name,'last_name',last_name,'username',username,'password',password FROM users where username = '${req.params.username}'`,
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
        }
    )
})

router.post('/',(req,res)=>{
    con.query(
        `insert into users(username,password,first_name,last_name)values('${req.body.username}','${req.body.password}','${req.body.first_name}','${req.body.last_name}')`,
        (err,results)=>{
            if(err) throw err;
            res.status(201).send()
        }
    )
})
router.delete('/:id',(req,res)=>{
    con.query(
        `delete from users where username = '${req.params.id}'`,
        (err,results)=>{
            if(err) throw err;
            res.status(200).send()
        }
    )
})




module.exports = router;