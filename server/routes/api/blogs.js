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


router.get("/",(req,res)=>{
    
    con.query(
        "select * FROM blogs",
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
            
        }
    )
})

router.get("/:blog_id",(req,res)=>{
    con.query(
        `select * from blogs where blog_id = '${req.params.blog_id}'`,
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
        }
    )
})

router.post('/',(req,res)=>{
    con.query(
        `insert into blogs(blog_id,blog_name,blog_description,blog_body,blog_link)values('${req.body.blog_id}','${req.body.blog_name}','${req.body.blog_description}','${req.body.blog_body}','${req.body.blog_link}')`,
        (err,results)=>{
            if(err) throw err;
            res.status(201).send()
        }
    )
})

router.delete('/:blog_id',(req,res)=>{
    con.query(
        `delete from blogs where blog_id = '${req.params.blog_id}'`,
        (err,results)=>{
            if(err) throw err;
            res.status(200).send()
        }
    )
})

router.put('/:blog_id',(req,res)=>{
    con.query(
        `update blogs set blog_name ='${req.body.blog_name}',blog_description ='${req.body.blog_description}',blog_body ='${req.body.blog_body}' where blog_id = '${req.params.blog_id}'`,
        (err,results)=>{
            if(err) throw err;
            res.status(200).send()
        }
    )
})




module.exports = router;