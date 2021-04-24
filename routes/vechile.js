var express = require('express');
var router = express.Router();
const vechile_controlers = require('../controllers/vechile');


// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }

/* GET costumes */
router.get('/',vechile_controlers.vechile_view_all_Page );


/* GET detail vechile page */
router.get('/detail', vechile_controlers.vechile_view_one_Page);

/* GET create vechile page */
router.get('/create',secured, vechile_controlers.vechile_create_Page);

/* GET create update page */
router.get('/update', secured,vechile_controlers.vechile_update_Page);

/* GET create vechile page */
router.get('/delete', secured,vechile_controlers.vechile_delete_Page);

module.exports = router;

