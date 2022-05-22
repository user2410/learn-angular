const mysql     = require('mysql');
const {Buffer}  = require('buffer');
const util      = require('util');

const db_bookmanage = mysql.createPool({
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIM) || 10,
    host    : process.env.DB_HOST || '127.0.0.1',
    user    : process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: 'bookmanage'
});

const query = util.promisify(db_bookmanage.query).bind(db_bookmanage);

const getImgURL = function(imgType, imgData){
    // if(imgData instanceof Buffer)
    if(Buffer.byteLength(imgData) > 0)
        return `data:image/${imgType};base64,${imgData.toString('base64')}`;
    else
        return '/common/blank_cover.png';
}

module.exports = {
    bookmanage: db_bookmanage,
    getImgURL:  getImgURL,
    query: query
}