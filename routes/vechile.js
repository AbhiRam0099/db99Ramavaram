var express = require('express');
var router = express.Router();
const vehicle_controlers=  require('../controllers/vechile');

/* GET home page. */
router.get('/', vehicle_controlers.vechile_view_all_Page );
module.exports = router;


/* GET detail vechile page */
router.get('/detail', vechile_controlers.vechile_view_one_Page);

/* GET create vechile page */
router.get('/create', vechile_controlers.vechile_create_Page);

/* GET create update page */
router.get('/update', vechile_controlers.vechile_update_Page);

/* GET create vechile page */
router.get('/delete', vechile_controlers.vechile_delete_Page);

