const fs = require('fs');

let communityDistricts= [];

let data_csv = fs.readFileSync('data/TreeAirQuality.csv', 'utf8');

let data = data_csv.split("\n");

peeps.forEach(function(data) {
  let district_info = data.split(',');
  let districts = {};
  districts['CDID'] = district_info[0];
  districts['neigborhood_name'] = district_info[1];
  districts['air_quality'] = district_info[2];
  districts['treeCount'] = district_info[3];

  communityDistricts.push(districts);
});

fs.writeFileSync('data/potter.json', JSON.stringify(communityDistricts), 'utf8');
