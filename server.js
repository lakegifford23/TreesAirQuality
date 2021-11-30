// fall 2021
// advanced CS Topics


const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('docs')); //greenlights all requests for files in the static folder

app.listen(port, () => {
  console.log(`data journalism server listening at http://localhost:${port}`)
});
