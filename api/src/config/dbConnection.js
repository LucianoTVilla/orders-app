const mongoose = require('mongoose');

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

const uri = `mongodb+srv://${username}:${password}@${uri}/?retryWrites=true&w=majority`;

module.exports = () => mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});