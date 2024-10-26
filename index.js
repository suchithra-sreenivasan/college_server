// import json server and store in a variable
const jsonserver = require('json-server')


// create server
const CollegeServer = jsonserver.create()


// create middleware to convert json format to js
const middleware = jsonserver.defaults()


// import db, json file
const router = jsonserver.router("db.json")


// set port for the server 
const PORT = 4005 || process.env.PORT


// server uses the middleware
CollegeServer.use(middleware)
CollegeServer.use(router)


// listen() - to listen  whether server is receiving any responce 
CollegeServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number  ${PORT}`);
})


