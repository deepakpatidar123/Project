const express = require('express');

const router = express.Router();
const usercontroller = require('../controllers/user')


router.post('/user/add-user' ,usercontroller.addUser)

router.get('/user/get-users' , usercontroller.getUser)

router.delete('/user/delete-user/:id' ,usercontroller.deleteUser)

module.exports = router