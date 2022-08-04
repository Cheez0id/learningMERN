# Building a MERN stack app from scratch - push-up-tracker
watching [Traversy](https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm&ab_channel=TraversyMedia) video to learn this again!

Should we follow the tutorial front to back, or should we try and make our push-up tracker?
Now would be the time to decide.  I think we can do this! So, the example that Traversy is making is a 'goal tracker'.  I guess that means we can create goals (CREATE from CRUD), read them (READ from CRUD), update them (UPDATE from CRUD), and delete them (DELETE from CRUD) - "GET POST PUT DELETE" routes.  

[18:19](https://youtu.be/-0exw-9YJBo?t=1099) - If we decide to be ambitious and create our push-up tracker, we're basically choosing to start that now.

[19:47](https://youtu.be/-0exw-9YJBo?t=1187) - **we did it bois!  we made and tested routes**
 so our routes work, but they are ONLY routes at this point- and those routes only return 'messages' as defined in the object attached to the request.

 [25:25](https://youtu.be/-0exw-9YJBo?t=1525) - note that HERE Traversy decides to put the routes in getRoutes into consolidated lines of code (so, because get and post both use '/' and '/:id', respectively, you COULD do something like: `router.route('/').get(getGoals).post(setGoal)` - BUT I'm, choosing not to do that just yet)

[28:20](https://youtu.be/-0exw-9YJBo?t=1700) - adding app.use express.json and express.urlencoded so that the types of data being transmitted are understood


## Technologies Used
- Node
- Express
- Insomnia
- YouTube [Traversymedia](https://www.traversymedia.com/)