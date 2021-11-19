const fs = require('fs');

let characters = [];

let peeps_csv = fs.readFileSync('data/Characters.csv', 'utf8');

let peeps = peeps_csv.split("\n");

peeps.forEach(function(peep) {
  let character_info = peep.split(';');
  let character = {};
  character['name'] = character_info[1];
  character['gender'] = character_info[2];
  character['house'] = character_info[4];
  character['species'] = character_info[7];

  if (character_info[12])
    character['skills'] = character_info[12].split('|');
  else {
    character['skills'] = [];
  }

  characters.push(character);
});

fs.writeFileSync('data/potter.json', JSON.stringify(characters), 'utf8');
