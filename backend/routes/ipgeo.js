const express               = require('express');
const { check }             = require('express-validator');


const router                = express.Router();

const controller            = require('../controllers/ipgeoController.js')
//#region pages
// router.get('/test'                  ,isAuth, (req,res,next) => {res.send(__dirname); });



router.get('/get/:ip',
[
    check('ip').isString().isLength({min:7, max:19})
],
controller.getByIp);



module.exports = router;