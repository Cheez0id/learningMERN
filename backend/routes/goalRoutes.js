const express = require('express')
//we are using the router method availble in the express framework here
const router = express.Router()


router.get('/', (req, res) =>{
    res.status(200).json({message :'Get Goals'})
    }) 

module.exports = router

