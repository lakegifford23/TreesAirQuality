const fs = require('fs');

let communityDistricts= [];

let data_csv = fs.readFileSync('data/TreeAirQuality.csv', 'utf8');

let data = data_csv.split("\n");

peeps.forEach(function(data) {
  let district_info = data.split(',');
  let districts = {};
  communityDistricts['CDID'] = communityDistricts_info[0];
  communityDistricts['neigborhood_name'] = communityDistricts_info[1];
  communityDistricts['air_quality'] = communityDistricts_info[2];
  communityDistricts['treeCount'] = communityDistricts_info[3];

  communityDistricts.push(districts);
});

fs.writeFileSync('data/potter.json', JSON.stringify(communityDistricts), 'utf8');
