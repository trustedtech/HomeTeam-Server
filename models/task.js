const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({

    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "A valid moniker is required"], 
        // match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
    },

    icon: String,
    summary: String,
    description: String,
    category: String,
    isCustom: Boolean,
    hhOrigin: String

});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;