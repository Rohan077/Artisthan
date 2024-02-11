const { getAllPosts, addPosts, deletePost } = require('../controllers/postsController');
const { addUsers, deleteUser, updateUser,loginUser, getOneUser } = require('../controllers/usersController');

const express = require('express');

const router = express.Router();


router.delete('/users/:id',deleteUser)

router.get('/users/:name',getOneUser)

router.post('/users',addUsers)

router.patch('/users/:id',updateUser)

router.post('/users/login',loginUser)








router.delete('/posts/:id',deletePost)

router.get('/posts',getAllPosts)

router.post('/posts',addPosts)




module.exports=router;