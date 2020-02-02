//Require packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//app setup
const app = express();
//app use these packages
app.use(cors());
app.use(express.json());
//connect mongoDB to the server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
//when connected log successful
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established sucessfully");
})
// require route
const notesRouter = require('./routes/notes');
//use route, this will make it so our /notse url works
app.use('/notes', notesRouter);







// set port
const port = process.env.PORT || 5000;
//connect to port
app.listen(port, () =>{
  console.log(`Server has sucessfully connected on port: ${port}`)
})
