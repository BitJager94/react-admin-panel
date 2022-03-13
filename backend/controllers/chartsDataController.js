const { validationResult }  = require('express-validator');
const axios                 = require('axios');

exports.getExchangeRate = (req, res, next) => {

    let errors = validationResult(req);
    if(!errors.isEmpty())
    {
        const error = new Error('An Error Occured While Fetching Exchange Rate!');
        error.errorCode = 1;
        error.data = errors.array(); 
        return res.status(401).json({error: error.message, errors:error.data});
    }

    let url = `https://api.coingecko.com/api/v3/exchange_rates`;

    return axios.get(url).then(result => {
        res.header("Access-Control-Allow-Origin", "*");
        return res.send(result.data)
    }).catch(err => {
        return res.status(401).json({error: "An Error Occured While Fetching Exchange Rate!", errors:[{msg:err.message}]});
    });
    
    
};


