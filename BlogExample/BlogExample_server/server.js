const express   = require('express');
const cors      = require('cors');


// Ininitalize express
const app   = express();


// Cors config
var corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:4000']
}
app.use(cors(corsOptions));


// Routers
const articleRouter = require('./routes/articles');
app.use('/articles', articleRouter);


// Listening on port
var port    = 8000;
app.listen(port, ()=>{
    console.log(`Listening on port ${8000}`);
})