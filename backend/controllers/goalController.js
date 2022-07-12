
//description: gets the goals - route is /api/goals
const getGoals = (req, res) =>{
    res.status(200).json({message:`get goals`})
}
//description: set the goals - route is /api/goals
const setGoal = (req, res) =>{
    res.status(200).json({message:`set goal`})
}

//description: update the goals - route is /api/goals/:id
const updateGoal = (req, res) =>{
    res.status(200).json({message:`update goal`})
}

//description: update the goals - route is /api/goals/:id
const deleteGoal = (req, res) =>{
    res.status(200).json({message :`Delete Goal ${req.params.id}`})
}
module.exports = {
    getGoals, updateGoal, setGoal, deleteGoal
}