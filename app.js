const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
const port = 8000;

app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'views','home.html' )));



app.listen(port, () => console.log('Server running in http://localhost:' +  port))