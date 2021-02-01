const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the events schemma

const eventSchema = new Schema({

    name : {
        type : String,
        require: true
    },
    title : {
        type : String,
        require: true
    },
    description : {
        type : String,
        require: true
    },
    venue:{
        type: String,
        require: true
    },
    creation_date:{
        type: Date,
        require: true
    }
});


module.exports = mongoose.model('Event',eventSchema,'events');