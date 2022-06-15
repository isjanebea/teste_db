const mongoose = require('mongoose')

const pokedexSchema = new mongoose.Schema({ 
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId
  }, 

  name: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  description: {
    type: String,
  },

  status: {
    type: Boolean,
    default: true // não deveria ter hp e atk?
  }

}, { timestamps: true })

module.exports = mongoose.model('pokedex', pokedexSchema)


