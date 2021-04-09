var express = require('express');
var router = express.Router();
const vehicle_controlers=  require('../controllers/vechile');

/* GET home page. */
router.get('/', vehicle_controlers.vechile_view_all_Page );
module.exports = router;


