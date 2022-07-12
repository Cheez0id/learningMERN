const express = require('express')
//we are using the router method availble in the express framework here
const router = express.Router()

const {getGoals, updateGoal, setGoal, deleteGoal} = require('../controllers/goalController')

//alrighty, so if someone goes to the route that comes down here, it is going to run a get request here ('/'), to respond with - if 200 then return a json object with a 'message' key and a 'get goals' string as the value.  EDIT: We took these routes and are using them via the controller. 
// router.get('/', (req, res) =>{
//     res.status(200).json({message :'Set Goal'})
//     }) 
//now becomes the below
router.get('/', getGoals) 

//to create,  we need to post
router.post('/', setGoal)

  //for the put request, we need the id - because we have to point to which goal we want to update.
  //note the back ticks - so the /:id is the PARAM, and in the object/message we are using the variable ${req.params.id} to point to that variable- my guess is that this will just show us the id number in a string?
router.put('/:id', updateGoal)

//we are going to use the id as well for delete
router.delete('/:id', deleteGoal)

// ok so this is our module exporting the router variable we created - per the google "Module exports are the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code"
module.exports = router

