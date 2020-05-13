const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new Schema({

    policy_id: String, // id of policy
    household_id: String, // id of household
    task_id: String, // id of task (will need to fetch name, icon, and summary)
    member_id: String, // id of member (will need to fetch alias)
    status: String, // assigned, snoozed, started, completed, overdue, failed
    targetDate: Date, // initial schedule date
    expectDate: Date, // revised date if missed or snoozed
    expiration: Date // date to mark task as failure and perhaps suspend the policy

},{timestamps: true});

const Work = mongoose.model('Work', WorkSchema);

module.exports = Work;