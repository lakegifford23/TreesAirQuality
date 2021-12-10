const fs = require('fs');

let rateByCd= [];

let rateByCd_csv = fs.readFileSync('plethData.csv', 'utf8');
let cdObj = rateByCd_csv.split("\n");

cdObj.forEach(function(data) {
  let cdObj2 = data.split(',');
  let rateByCdInfo = {};
  rateByCdInfo['code'] = cdObj2[1];
  rateByCdInfo['tree'] = cdObj2[2].trim();
  rateByCd.push(rateByCdInfo);
});

fs.writeFileSync('plethData.json', JSON.stringify(rateByCd), 'utf8');
