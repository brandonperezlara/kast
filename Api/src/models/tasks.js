const mongoose = require('mongoose');
const schema = mongoose.Schema;

const tasksSchema = schema({
    user: { type: schema.Types.ObjectId, ref: 'users' },
    id: Number,
    title: String,
    description: String,
    status: String,
    users: [{ type: schema.Types.ObjectId, ref: 'subs' }],
});

const tasks = mongoose.model('tasks', tasksSchema);
module.exports = tasks;