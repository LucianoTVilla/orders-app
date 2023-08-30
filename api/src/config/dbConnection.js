const mongoose = require('mongoose');

const username = 'luchotest';
const password = 'lucho';

const uri = process.env.MONGODB_URI
  || `mongodb+srv://${username}:${password}@cluster0.rz7urg0.mongodb.net/?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});