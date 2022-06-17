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

  gender: {
    type: String
  },

  region:  {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('coach', coachSchema)