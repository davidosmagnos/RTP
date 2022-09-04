const express = require("express");

const router = express.Router();

//get posts

router.get("/",(req,res)=>{
    res.send("hi")
})


module.exports = router;