const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
    

});

const Members = mongoose.model('Members', MemberSchema);

module.exports = Members;