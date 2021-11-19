const fs = require('fs');

let communityDistricts= [];

let data_csv = fs.readFileSync('data/TreeAirQuality.csv', 'utf8');

let data = data_csv.split("\n");

peeps.forEach(function(data) {
  let district_info = data.split(',');
  let districts = {};
  communityDistricts['CDID'] = communityDistricts[0];
  communityDistricts['neigborhood_name'] = communityDistricts[1];
  communityDistricts['air_quality'] = communityDistricts[2];
  communityDistricts['treeCount'] = communityDistricts[3];

  communityDistricts.push(districts);
});

fs.writeFileSync('data/potter.json', JSON.stringify(communityDistricts), 'utf8');
