const mongoose = require('mongoose');
const schema = mongoose.Schema;

const subsSchema = schema({
    user: { type: schema.Types.ObjectId, ref: 'users' },
    id: Number,
    name: String,
    Email: String,


});

const subs = mongoose.model('subs', subsSchema);
module.exports = subs;