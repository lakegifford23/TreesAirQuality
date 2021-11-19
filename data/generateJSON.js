const fs = require('fs');

let communityDistricts= [];

let data_csv = fs.readFileSync('data/TreeAirQuality.csv', 'utf8');

let data = data_csv.split("\n");

peeps.forEach(function(data) {
  let district_info = data.split(',');
  let districts = {};
  character['CDID'] = character_info[0];
  character['neigborhood_name'] = character_info[1];
  character['air_quality'] = character_info[2];
  character['treeCount'] = character_info[3];

  communityDistricts.push(character);
});

fs.writeFileSync('data/potter.json', JSON.stringify(communityDistricts), 'utf8');
