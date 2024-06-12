
// este archivo se encarga solo para el llamado de las variables de entorno 

require('dotenv').config(); 
const {get} = require('env-var');

const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}


module.exports = {envs};