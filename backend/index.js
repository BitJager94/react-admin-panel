
const express           = require('express');
const parser            = require('body-parser');
const expressApp        = express();

const ipGeoRoutes       = require('./routes/ipgeo');
const chartsDataRoutes  = require('./routes/charts');

const {SERVER_PORT}     = require('./env')


expressApp.use(parser.urlencoded({extended: false, limit:'150kb'}));
// expressApp.use(express.static(path.join(__dirname, 'assets')));
// expressApp.use(session({secret: SESSION_KEY, resave: false, saveUninitialized: false}));

expressApp.use('/ipgeo'  , ipGeoRoutes);
expressApp.use('/charts' , chartsDataRoutes);

const server = expressApp.listen(SERVER_PORT);
