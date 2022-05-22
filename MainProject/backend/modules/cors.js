const cors      = require('cors');

// Cors config
var corsOptions = {
    origin: ['http://localhost:4200', 'http://localhost:4000']
};

module.exports = cors(corsOptions);