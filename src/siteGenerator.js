const fs = require('fs');
const ejs = require('ejs');


let district_info = fs.readFileSync('data/CDdata.json', 'utf8');
let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let micro1 = fs.readFileSync('src/views/micro.ejs', 'utf8');
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
let data = JSON.parse(district_info);
let communityDistricts = [];

for(let i in data){
 communityDistricts[i-1] = data[i].CDID;
}


let index_html = ejs.render(index_template, {
filename: __dirname + '/views/index.ejs',
 data: JSON.parse(district_info)
});

let micro_html;

for(let i = 0; i < communityDistricts.length; i++){
micro_html = ejs.render(micro1, {
 filename: __dirname + '/views/micro.ejs',
data: JSON.parse(character_info)
});
fs.writeFileSync('docs/micro' + communityDistricts[i]+ '.html', micro_html, 'utf8');
}

let about_html = ejs.render(about_template, {
 filename: __dirname + '/views/about.ejs',
 data: JSON.parse(character_info)
});

fs.writeFileSync('docs/index.html', index_html, 'utf8');
fs.writeFileSync('docs/about.html', about_html, 'utf8');
