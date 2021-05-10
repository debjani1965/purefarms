const mongoose = require('../db/db.connection');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = mongoose.Schema({
    categoryId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
categorySchema.plugin(uniqueValidator);
const category = mongoose.model('Category', categorySchema);
module.exports = category;