const mongoose = require('mongoose');


const saleSchema = mongoose.Schema({
    order: [{
      type: String
    }],
    isCompleted: {
      type: Boolean,
      default: false
    },
    price: Number,
    contactNumber: String,
    address: String
})

module.exports = mongoose.model('sale', saleSchema);