const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// const categorySchema = new mongoose.Schema({
//   name: String,
//   budgetAmount: Number
// });

const spendingCategorySchema = {
      housingBudget: String,
      foodBudget: String,
      transportationBudget: String,
      entertainmentBudget: String,
      shoppingBudget: String
 }

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
  },
  lastName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 99
    },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 99,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    index: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 99
  },
  // spendingCategory: [categorySchema]
    spendingCategory: spendingCategorySchema
});

// Override 'toJSON' to prevent the password from being returned with the user
userSchema.set('toJSON', {
  transform: function(doc, user, options) {
    const returnJson = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName
    };
    return returnJson;
  }
});

// Returns true if password hashes match. false otherwise
userSchema.methods.authenticated = function(password) {
  return bcrypt.compareSync(password, this.password);
}

// Mongoose's version of a beforeCreate hook
userSchema.pre('save', function(next) {
  const hash = bcrypt.hashSync(this.password, 10);
  // store the hash as the user's password
  this.password = hash;
  next();
});


// Exporting the user model
module.exports = mongoose.model('User', userSchema);
