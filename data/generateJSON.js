const fs = require('fs');

let communityDistricts= [];

let cd_csv = fs.readFileSync('TreeAirQuality.csv', 'utf8');
let cd = cd_csv.split("\n");

cd.forEach(function(data) {
  let district_info = data.split(',');
  let districts = {};
  districts['CDID'] = district_info[1];
  districts['neigborhood_name'] = district_info[2];
  districts['air_quality'] = district_info[3];
  districts['treeCount'] = district_info[4].trim();
  console.log(district_info[2] + ', ' + district_info[1] + ', ' + district_info[4].trim());

  communityDistricts.push(districts);
});

fs.writeFileSync('CDdata.json', JSON.stringify(communityDistricts), 'utf8');
