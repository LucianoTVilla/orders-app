const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  url: String,
  price: Number,
  quantity: Number
});

const OrderSchema = new mongoose.Schema({
  id: String,
  createDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['Approve', 'Cancel', 'Delivery', 'Traveling'] },
  cliente: {
    name: String,
    email: String
  },
  shippingAddress: String,
  shippingPromise: Date,
  items: [ItemSchema]
});

module.exports = mongoose.model('Order', OrderSchema);