const express               = require('express');
const { check }             = require('express-validator');


const router                = express.Router();

const controller            = require('../controllers/chartsDataController')
//#region pages
// router.get('/test'                  ,isAuth, (req,res,next) => {res.send(__dirname); });



router.get('/exchange',
controller.getExchangeRate);



module.exports = router;