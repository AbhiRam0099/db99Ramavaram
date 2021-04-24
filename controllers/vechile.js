const vechile = require('../models/vechile');

// List of all vechile
exports.vechile_list = async function(req, res) {
    try {
        thevechiles = await vechile.find();
        res.send(thevechiles);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// Handle vechile create on POST.
exports.vechile_create_post = async function(req, res) {
    console.log(req.body)
    let document = new vechile();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costumetype":"goat", "cost":12, "size":"large"}
    document.vechileName = req.body.vechileName;
    document.vechileModel = req.body.vechileModel;
    document.vechileClassification=req.body.vechileClassification;
    document.vechilePrice = req.body.Price;
    try {
        console.log(res.body);
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.send(500, `{"error": ${err}}`);
    }
};

// Handle vechile delete form on DELETE.
exports.vechile_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await vechile.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.vechile_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await vechile.findById(req.query.id)
        res.render('vechiledetail', { title: 'vechile Detail', toShow: result });
    } catch (err) {
        res.status(500)
            //res.send(`{'error': '${err}'}`);\
        let s = 'CastError: Cast to ObjectId failed for value "' + req.query.id + '" at path "_id" for model "vechile"'
            //if (err = s) {
            //  console.log("Id not found")
            //res.send(`Id not found`);
            //} else {
        res.send(`{'error': '${err}'}`);
        //}
        // console.log(`The error "${err}" ${err.includes(" Cast to ObjectId failed for value") ? 'id not found' : 'is not'} in the sentence`);
    }
};


// Handle a delete one view with id from query
exports.vechile_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await vechile.findById(req.query.id)
        res.render('vechiledelete', { title: 'vechile Delete', toShow: result });
    } catch (err) {
        res.status(500)
        let s = 'CastError: Cast to ObjectId failed for value "' + req.query.id + '" at path "_id" for model "vechile"'
        if (err = s) {
            console.log("Id not found")
            res.send(`Id not found`);
        } else {
            res.send(`{'error': '${err}'}`);
        }
    }
};

// VIEWS
// Handle a show all view
exports.vechile_view_all_Page = async function(req, res) {
    try {
        thevechile = await vechile.find();
        res.render('vechile', { title: 'vechiles Search Results', results: thevechile });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// for a specific vechile.
exports.vechile_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await vechile.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.vechile_create_Page = async function(req, res) {
    console.log("create view")
    try {
        res.render('vechilecreate', { title: 'vechile Create' });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a vechile.
// query provides the id
exports.vechile_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let toUpdate = await vechile.findById(req.params.id)
            // Do updates of properties
        if (req.body.Name) toUpdate.vechileName = req.body.vechileName;
        if (req.body.Model) toUpdate.vechileModel = req.body.vechileModel;
        if(req.body.Classification)toUpdate.vechileClassification=req.body.vechileClassification;
        if (req.body.Price) toUpdate.vechilePrice = req.body.vechilePrice;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};



// Handle vechile update form on PUT.
exports.vechile_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await vechile.findById(req.params.id)
            // Do updates of properties
        if (req.body.vechileName) toUpdate.Name = req.body.vechileName;
        if (req.body.vechileModel) toUpdate.Company = req.body.vechileModel;
        if(req.body.vechileClassification)toUpdate.Classification=req.body.vechileClassification;
        if (req.body.vechilePrice) toUpdate.Price = req.body.Price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


