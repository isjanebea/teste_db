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

  abilities: {
    type: [String],
    default: []
  },

  description: {
    type: String,
  },

  avaliable: {
    type: Boolean,
    default: true // não deveria ter hp e atk?
  },

  coach: {
    ref: 'coach',
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('pokedex', pokedexSchema)


