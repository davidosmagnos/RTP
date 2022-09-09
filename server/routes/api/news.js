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
        "select * FROM news",
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
            
        }
    )
})

router.get("/:news_id",(req,res)=>{
    con.query(
        `select * from news where news_id = '${req.params.news_id}'`,
        (err,results)=>{
            if(err) res.send(err);
            res.send(results)
        }
    )
})

router.post('/',(req,res)=>{
    con.query(
        `insert into news(news_id,news_title,news_link,news_image,news_description,news_body)values('${req.body.news_id}','${req.body.news_title}','${req.body.news_link}','${req.body.news_image}',"${req.body.news_description}","${req.body.news_body}")`,
        (err,results)=>{
            if(err) throw err;
            res.status(201).send()
        }
    )
    // console.log(req.files)
})

router.delete('/:news_id',(req,res)=>{
    con.query(
        `delete from news where news_id = '${req.params.news_id}'`,
        (err,results)=>{
            if(err) throw err;
            res.status(200).send()
        }
    )
})

router.put('/:news_id',(req,res)=>{
    con.query(
        `update news set news_title ='${req.body.news_title}',news_description ='${req.body.news_description}',news_body ='${req.body.news_body}',news_image = '${req.body.news_image}' where news_id = '${req.params.news_id}'`,
        (err,results)=>{
            if(err) throw err;
            res.status(200).send()
        }
    )
})




module.exports = router;