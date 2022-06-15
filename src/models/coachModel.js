const mongoose = require('mongoose')

const coachSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  }, 

  name: {
    type: String,
    required: true
  },

  age: {
    type: Number,
    required: true
  },

  team: {
    type: String
  },

  city:  {
    type: String,
    required: true
  },

  pokedex: {
    ref: 'pokedex',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }

}, { timestamps: true })

module.exports = mongoose.model('coach', coachSchema)