const fs = require('fs');
const ejs = require('ejs');

let character_info = fs.readFileSync('data/CDdata.json', 'utf8');
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let micro1 = fs.readFileSync('src/views/micro.ejs', 'utf8');
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');



let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: JSON.parse(character_info)
});

let micro_html = ejs.render(micro1, {
  filename: __dirname + '/views/micro.ejs',
  data: JSON.parse(character_info)
});

let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs',
  data: JSON.parse(character_info)
});

fs.writeFileSync('build/index.html', index_html, 'utf8');
fs.writeFileSync('build/micro.html', micro_html, 'utf8');
fs.writeFileSync('build/about.html', about_html, 'utf8');
