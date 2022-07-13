const db = require("../app/model");
const Tutorial = db.tutorial;
exports.findAll = (req, res) => {
    Tutorial.findAll().then(data => {
    res.send(data);
    }).catch (err => {
        console.log(err)
    // res.status(500).send({
    // message:
    // err.message || "Some error have occurred when retrieving the tutorials."
    
    // });
    });
    };

    exports.cretedata = (req,res) =>{
        const data = {
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
            };
            console.log(data)

            Tutorial.create(data).then(data => {
            res.send(data);
            }).catch(err => {
            res.status(500).send ({
            Message:
            err.message || "“Some errors will occur when creating a tutorial”"
            });
            });
    }
   
    