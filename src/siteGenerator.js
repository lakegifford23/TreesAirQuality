const fs = require('fs');
const ejs = require('ejs');


let district_info = fs.readFileSync('data/CDdata.json', 'utf8');
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let micro1 = fs.readFileSync('src/views/micro.ejs', 'utf8');
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
let doughnutChart_template = fs.readFileSync('src/js/doughnutChart.js', 'utf8');
let map_template = fs.readFileSync('src/js/map.js', 'utf8');
let geojson = fs.readFileSync('src/js/geojson.json', 'utf8');
let data = JSON.parse(district_info);
let plethData = JSON.parse(fs.readFileSync('src/js/plethData.json', 'utf8'));
let treesCSV = fs.readFileSync('src/js/plethData.csv', 'utf8').replace(/^,|,$/g, "");

let communityDistricts = [];

for(let i in data){
 communityDistricts[i-1] = data[i].CDID;
}

//console.log(fs.readFileSync('src/js/geojson.json', 'utf8'));
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(district_info),
  nyc: JSON.parse(fs.readFileSync('src/js/geojson.json', 'utf8')),
  treesCSV: treesCSV,
  plethData: plethData
});

let micro_html;

for(let i = 0; i < communityDistricts.length; i++){
  micro_html = ejs.render(micro1, {
   filename: __dirname + '/views/micro.ejs',
   data: JSON.parse(district_info),
   data2: data[i+1]
  });
fs.writeFileSync('docs/micro' + communityDistricts[i]+ '.html', micro_html, 'utf8');
}

let about_html = ejs.render(about_template, {
 filename: __dirname + '/views/about.ejs',
 data: JSON.parse(district_info)
});


fs.writeFileSync('docs/index.html', index_html, 'utf8');
fs.writeFileSync('docs/about.html', about_html, 'utf8');
fs.writeFileSync('docs/doughnutChart.js', doughnutChart_template, 'utf8');
fs.writeFileSync('docs/map.js', map_template, 'utf8');
fs.writeFileSync('docs/geojson.json', geojson, 'utf8');
