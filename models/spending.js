// Require Mongoose node module
const mongoose = require('mongoose');


const spendingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  month: String,
  category: String,
  amount: Number,
  description: String
});

// Use schema to create model and Export Museum Model
module.exports = mongoose.model('Spending', spendingSchema);
