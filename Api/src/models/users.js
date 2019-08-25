const mongoose = require('mongoose');
const schema = mongoose.Schema;

const usersSchema = schema({
    Cod: String,
    FistName: String,
    LastName: String,
    Email: String,
    Birthdate: Date,
    Telephone: String,
    text: String,
    Task: [{ type: schema.Types.ObjectId, ref: 'tasks' }]

});

const users = mongoose.model('users', usersSchema);
module.exports = users;