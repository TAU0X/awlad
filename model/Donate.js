const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donateSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  donation: {
    type: Number,
  },
});
module.exports = mongoose.model('Donate', donateSchema);
