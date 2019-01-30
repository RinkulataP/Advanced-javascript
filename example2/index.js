//instead of
process.env.PORT
//read from config uttility
const{config} = require('./util');

config.port