const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema(
  {
    message: { type: String, required: true },
    username: { type: String, required: true },
    added: { type: Date, default: Date.now }
  }
)

module.exports = mongoose.model('Messages', MessageSchema);