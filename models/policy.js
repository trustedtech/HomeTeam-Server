const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PolicySchema = new Schema({

    // color: String,
    household_id: String, // id of household
    task_id: String, // id of task (will need to fetch name, icon, and summary)
    member_id: String, // id of member (will need to fetch alias)
    schedule: String,
    status: String, // unassigned, assigned, suspended, obsolete
    note: String, // for tooltip to explain why status suspended - sick or fail
    eval: Number, // a simple scale 1-5 to indicate the efficiency of this policy  
    lastComplete: Date,
    expiration: Date

},{timestamps: true});

const Policy = mongoose.model('Policy', PolicySchema);

module.exports = Policy;