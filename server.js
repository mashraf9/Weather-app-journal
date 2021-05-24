// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

app.get('/bringData',(req,res)=>{
    res.send(projectData);
     })    
    
     app.post('/storeData',(req,res)=>{
    projectData ={
        temp:req.body.temp,
        date:req.body.date,
        content:req.body.content
    }
    res.send(projectData);
     
    console.log(req.body) 
    res.end
     })
    
// Setup Server
const port = 3000;
 app.listen(port,listening)
function listening(){
    console.log('Your is server runnig')
    console.log(`running on localhost: ${port}`);

}


