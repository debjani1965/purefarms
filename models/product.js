const mongoose = require('../db/db.connection');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
    categoryId: { 
        type: String,
        required: true
    },
    availableQty: {
        type: [String]
    },
    unit: {
        type: String,
        default: "Kg"
    },
    price: {
        type: [Number]
    },
    currency: {
        type: String,
        default: 'Rs'
    },
    status: {
        type: Boolean,
        default: true
    }
});

const product = mongoose.model('Product', productSchema);
module.exports = product;