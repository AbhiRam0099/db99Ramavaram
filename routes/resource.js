var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// Require controller modules
var api_controller = require('../controllers/api');
var vechile_controller = require('../controllers/vechile');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// vechile ROUTES ///
// POST request for creating a vechile.
router.post('/vechile', vechile_controller.vechile_create_post);
// DELETE request to delete vechile.
router.delete('/vechiles/:id', vechile_controller.vechile_delete);
// PUT request to update vechile.
router.put('/vechile/:id', vechile_controller.vechile_update_put);
// GET request for one vechile.
router.get('/vechile/:id', vechile_controller.vechile_detail);
// GET request for list of all vechile items.
router.get('/vechile', vechile_controller.vechile_list);
/* GET detail vechile page */
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
router.put('/detail', secured, vechile_controller.vechile_view_one_Page);
/* GET create costume page */
router.get('/create', secured, vechile_controller.vechile_create_Page);
/* GET create update page */

router.get('/update', secured, vechile_controller.vechile_update_Page);
/* GET create costume page */
router.get('/delete', vechile_controller.vechile_delete_Page);
module.exports = router;

