  
var vechile = require('../models/vechile');
// List of all Fishs
exports.vechile_list = async function (req, res) {
    try {
        thevechile = await vechiles.find();
        res.send(thevechile);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
    // res.send('NOT IMPLEMENTED: Fish list');
};
// for a specific Fish.
exports.vechile_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: vechile detail: ' + req.params.id);
};
// Handle Fish create on POST.
exports.vechile_create_post = async function (req, res) {
    console.log(req.body)
    let document = new vechile();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.vechilename = req.body.vechilename;
    document.model = req.body.model;
    document.classification = req.body.classification;
    document.price = req.body.price;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle Fish delete form on DELETE.
exports.vechile_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: vechile delete DELETE ' + req.params.id);
};
// Handle Fish update form on PUT.
exports.vechile_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: vechile update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.vechile_view_all_Page = async function (req, res) {
    try {
        theVechile = await vechile.find();
        console.log(theVechile)
        res.render('vechile', { title: 'vechile Search Results', results: theVechile });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle a show one view with id specified by query
exports.vechile_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await vechile.findById( req.query.id)
        res.render('vechiledetail', 
{ title: 'vechile Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a fish.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vechile_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('vechilecreate', { title: 'vechile Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a fish.
// query provides the id
exports.vechile_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await vechile.findById(req.query.id)
        res.render('vechileupdate', { title: 'vechile Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// for a specific Costume.
exports.vechile_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await vechile.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};


// Handle a delete one view with id from query
exports.vechile_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await vechile.findById(req.query.id)
        res.render('vechiledelete', { title: 'vechile Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
//Handle Costume update form on PUT.
exports.vechile_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await vechile.findById( req.params.id)
        // Do updates of properties
        if(req.body.vechilename) toUpdate.vechilename = req.body.vechilename;
        if(req.body.model) toUpdate.model = req.body.model;
        if(req.body.price) toUpdate.price = req.body.price;
        if(req.body.classification) toUpdate.classification = req.body.classification;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};

// Handle Costume delete on DELETE.
exports.vechile_delete = async function(req, res) {
    console.log("delete "  + req.params.id)
    try {
        result = await vechile.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


