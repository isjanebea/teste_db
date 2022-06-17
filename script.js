const coachModel = require('./src/models/coachModel')

async function script() {
  
  const Pokemon = require('./src/models/pokemonModels')
  const Coach = require('./src/models/coachModel')

  const ash = new Coach({
    name: 'Ash',
    age: 15,
    team: 'Team ashe',
    gender: 'male',
    region: 'east'
  })

  await ash.save()


  const pikachu = new Pokemon({
    name: 'Pikachu',
    type: 'Eletric',
    description: 'Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.',
    abilities: ['Static'],
    coach: ash._id
  })
  
  await pikachu.save()

  const bulbasaur = new Pokemon({
    name: 'Bulbasaur',
    type: 'Eletric',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    abilities: ['Overgrow'],
    coach: ash._id
  })
  
  await bulbasaur.save()

  // -----------------------------------------------------

  const jessie = new Coach({
    name: 'Jessie',
    age: 15,
    team: 'Rocket',
    gender: 'female',
    region: 'east'
  })

  await jessie.save()


  const wobbuffet = new Pokemon({
    name: 'Wobbuffet',
    type: 'Psychic',
    description: 'It hates light and shock. If attacked, it inflates its body to pump up its counterstrike.',
    abilities: ['Shadow Tag'],
    coach: jessie._id
  })
  
  await wobbuffet.save()

  const ekans = new Pokemon({
    name: 'Ekans',
    type: 'Poison',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    abilities: ['Shed Skin', 'Intimidate'],
    coach: jessie._id
  })
  
  await ekans.save()

  console.log(await Coach.find())
  console.log(await Pokemon.find())

  process.exit(1)
}


function main() {
  const mongoose = require('mongoose')
  mongoose
    .connect('mongodb://localhost:27017/pokedex',
      { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        if (err) { throw err }
        script()
      })
}

main()