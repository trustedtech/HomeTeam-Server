const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseholdSchema = new Schema({
    
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "A valid moniker is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    },

    members: {
        type: Array, //array of member ids
    },

    admins: {
        type: Array, //array of task ids
    },

    policies: {
        type: Array, //array of policy ids
    }

    // work: {
    //     type: Array,
    // },

    // history: {
    //     type: Array,
    // }

},{timestamps: true});

const Household = mongoose.model('Household', HouseholdSchema);

module.exports = Household;