const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.status(200).json({message :'Get Players'})
    }) 

router.post('/', (req, res) =>{
    res.status(200).json({message :'make new Player'})
    })    
    
router.put('/:id', (req, res) =>{
    res.status(200).json({message :`gonna edit that ${req.params.id}`})
    }) 

router.delete('/:id', (req, res) =>{
    res.status(200).json({message :`gonna delete that ${req.params.id}`})
    }) 

module.exports = router

