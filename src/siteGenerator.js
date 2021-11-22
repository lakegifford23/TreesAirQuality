const fs = require('fs');
const ejs = require('ejs');

let character_info = fs.readFileSync('data/CDdata.json', 'utf8');
let index_template = fs.readFileSync('views/index.ejs', 'utf8');

let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(district_info)
});

fs.writeFileSync('build/index.html', index_html, 'utf8');
