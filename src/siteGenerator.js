let index_template = fs.readFileSync('src/views/index.ejs', 'utf8');
let micro1 = fs.readFileSync('src/views/micro.ejs', 'utf8');
let about_template = fs.readFileSync('src/views/about.ejs', 'utf8');
let data = JSON.parse(character_info);
let communityDistricts = [];

for(let i in data){
 communityDistricts[i-1] = data[i].CDID;
}


let index_html = ejs.render(index_template, {
 data: JSON.parse(character_info)
});

let micro_html;

for(let i = 0; i < communityDistricts.length; i++){
micro_html = ejs.render(micro1, {
 filename: __dirname + '/views/micro.ejs',
 data: data[i+1]
});
fs.writeFileSync('build/micro' + communityDistricts[i]+ '.html', micro_html, 'utf8');
}

let about_html = ejs.render(about_template, {
 filename: __dirname + '/views/about.ejs',
});

fs.writeFileSync('build/index.html', index_html, 'utf8');
fs.writeFileSync('build/about.html', about_html, 'utf8');
