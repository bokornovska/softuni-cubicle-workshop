const mongoose = require('mongoose');


const config = require('./index')
async function databaseInit(){

    await mongoose.connect(config.DB_URI);

    console.log('DB connected')

}

module.exports = databaseInit;