const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const schema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    integrationType: {
        type: String,
        required: true,
    },
    settings: {
        type: Schema.Types.Object,
        required: true,
    },
});


module.exports = model('Integration', schema);
