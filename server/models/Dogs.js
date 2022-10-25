// require mongoose, a popular MongoDB library for nodejs
// Mongoose connects in the app.js file. Once mongoose is connected,
// it stays connected across all of the files in this project
// As long as you import this after you have connected,
// then mongoose will give you the active DB connection which is what we want
const mongoose = require('mongoose');

// variable to hold our Model
// A Model is our data structure to handle data. This can be an object, JSON, XML or anything else.
// A mongoDB model is a Mongo database structure with the API attached
// That is, a model has built-in functions for its data structure like find, findOne, etc.
// Usually you will retrieve data from the database through the Model object
let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    min: 1,
    required: true,
  },

  breed: {
    type: String,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});
// Create the Dog model based on the schema. You provide it with a custom discriminator
// (the name of the object type. Can be anything)
// and the schema to make a model from.
// Look at the model variable definition above for more details.
DogModel = mongoose.model('Dog', DogSchema);

// We only want to export the Dog model, so we can overwrite the entire exports object.
module.exports = DogModel;
