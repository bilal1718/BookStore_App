const express=require("express");
const router=express.Router();
const Book=require("../models/Book");
router.get("/",async (req,res,next)=>{
    let books;
    try{
        books=await Book.find();
    }catch(err){
        console.log(err);
    }
    if(!books){
        return res.status(404).json({message:"No book found"});
    }
    return res.status(200).json({books});
});
module.exports=router;