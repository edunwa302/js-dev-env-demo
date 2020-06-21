const express = require('express');
let path = require('path');
let open = require('open');
const port = 3080;
const app = express();
// tell exp which route it shd follow

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port)
    }
});