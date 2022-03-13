const { validationResult }  = require('express-validator');
const axios                 = require('axios');

exports.getByIp = (req, res, next) => {

    let errors = validationResult(req);
    if(!errors.isEmpty())
    {
        const error = new Error('An Error Occured While Fetching Location!');
        error.errorCode = 1;
        error.data = errors.array(); 
        return res.status(401).json({error: error.message, errors:error.data});
    }

    let ip = req.params.ip;
    let url = `https://ipinfo.io/${ip}/geo`;

    return axios.get(url).then(result => {
        res.header("Access-Control-Allow-Origin", "*");
        return res.send(result.data)
    }).catch(err => {
        return res.status(401).json({error: "An Error Occured While Fetching Location!", errors:[{msg:err.message}]});
    });
    
    
};


