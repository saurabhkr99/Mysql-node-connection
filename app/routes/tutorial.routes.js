const Tutorial = require("../../object/retrive.object");
const express = require('express')
module.exports = (app) => {
   
    
    var router = express.Router();
    
    // Creating a new Tutorial
    router.get("/findall", Tutorial.findAll);
    router.post("/createData",Tutorial.cretedata);
    router.delete("/deleteData", Tutorial.deleteAll);
    // Retrieving all the Tutorials
    // router.get("/", tutorials.findAll);
    
    // // Retrieving all the published Tutorials
    // router.get("/published", tutorials.findAllPublished);
    
    // // Retrieving a single Tutorial with id
    // router.get("/:id", tutorials.findOne);
    
    // // Updating a Tutorial with ID
    // router.put("/:id", tutorials.update);
    
    // // Deleting a Tutorial with ID
    // router.delete("/:id", tutorials.delete);
    
    // Creating a new Tutorial
    // router.delete("/", tutorials.deleteAll);
    
    app.use('/api', router);
    };