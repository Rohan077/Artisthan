const Posts = require('../models/Posts');


exports.getAllPosts= async(req,res)=>{
    const posts = await Posts.find()
    res.status(201).send(posts)
}

exports.addPosts = async(req,res)=>{
   
    const post = new Posts(req.body);
    const result = await post.save();
    res.status(201).send({message:"New post added successfully"})
}

exports.deletePost= async(req,res)=>{
    const post=await Posts.deleteOne({'_id':req.params.id})
    res.status(201).json({message:"post deleted!"})
}