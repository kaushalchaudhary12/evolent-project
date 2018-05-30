var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Contact = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  status: {
    type: String
  }
},{
    collection: 'contacts'
});

module.exports = mongoose.model('Contact', Contact);