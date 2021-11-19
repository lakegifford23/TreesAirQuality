const fs = require('fs');

let communityDistricts= [];

let cd_csv = fs.readFileSync('data/TreeAirQuality.csv', 'utf8');
let cd = cd_csv.split("\n");

cd.forEach(function(data) {
  let district_info = data.split(',');
  let districts = {};
  districts['CDID'] = district_info[0];
  districts['neigborhood_name'] = district_info[1];
  districts['air_quality'] = district_info[2];
  districts['treeCount'] = district_info[3];

  communityDistricts.push(districts);
});

fs.writeFileSync('data/CDdata.json', JSON.stringify(communityDistricts), 'utf8');
