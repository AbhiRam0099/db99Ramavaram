  
var vechile = require('../models/vechile');
// List of all Fishs
exports.vechile_list = async function (req, res) {
    try {
        thevechile = await vechile.find();
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
    res.send('NOT IMPLEMENTED: Fish detail: ' + req.params.id);
};
// Handle Fish create on POST.
exports.vechile_create_post = async function (req, res) {
    console.log(req.body)
    let document = new vechile();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.fishname = req.body.vechilename;
    document.habitat = req.body.model;
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
        thevechile = await vechile.find();
        console.log("njfndw")
        res.render('vechile', { title: 'vechile Search Results', results: thevechile });
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};