//server.js is the first file we created;  when we run "npm run server" at the root directory, the package.json knows to run backend/server.js because it's a script that we defined; it will run nodemon (which just keeps updating/restarting the node application instead of us constantly having to restart the server when we make changes)
//we also created a 'routes' folder to hold our various routes instead of having them all hang out in server.js.  This is called "modularization" and is good practice.

//So what happens when we npm run server, the script says "hey, use express!" Express is a javascript FRAMEWORK that we ust to build web and mobile applications.  Remember, NODE isn't the framework, it's the environment that executes javascript code outside of a browser; EXPRESS is a FRAMEWORK that is built ON TOP OF Node, adding helpful features and helps to simplify APIs - easier to organize applicatoins functionality. so we were like "hey Node, we gonna use express!"
const express = require ('express')

// then we create a const called dotenv where we require 'dotenv' .config();  dotenv is another module that we installed that allows us to use environment variables from the .env file we created at root - we can hide stuff here like secret keys!
const dotenv = require('dotenv').config()

//then we create a variable called port, which defines which port number we want to use.  we are saying we want to use the port defined in .env, OR use port 5000.
const port = process.env.PORT || 5000

//now we make a variable called 'app' that runs the express function that we created that requires the express framework
const app = express()

//we are creating this route for goals; so we are saying, "hey, lets use express framework and create this route with these two paramaters"- the first paramater is the route called 'api/goals' and the second is that when we make a get,post,put,or delete request to /api/goals, use the javascript file that we created called 'goalRoutes', which lives in the modularized routes folder.
app.use('/api/goals', require('./routes/goalRoutes'))


//and then this bad boy  down here says, "hey, let's use the express framework to listen on the specified port".  so the first paramater is the variable 'port' that we defined which called on the .env to define our secret port to listen on, and the second paramater is a fuction that console logs confirmation that the server started on that port
app.listen(port, () => console.log(`server started on port ${port}`))