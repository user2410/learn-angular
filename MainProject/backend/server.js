if(process.env.NODE_ENV == 'dev')
    require('dotenv').config();

// Modules initialization
const express   = require('express');
const app       = express();
app.use(express.static('public'));

const db        = require('./modules/db');

const cors      = require('./modules/cors');
app.use(cors);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({limit: process.env.BODYPARSER_URLENCODED_LIM || '10mb', extended: false}));


// Routers
const indexRouter = require('./routes/index');
app.use('/', indexRouter);


// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, ()=>{console.log(`Listening on port ${port}`)});

// Handle cleanup process
const proc = require('process');
function shutdown(err){
    console.error(`About to exit with code ${err}`);
    db.bookmanage.end((err)=>console.error(err));
    server.close();
    process.exit(0);
}
// proc.on('exit', shutdown);
proc.on('SIGINT', shutdown);
proc.on('SIGTERM', shutdown);
proc.on('SIGABRT', shutdown);