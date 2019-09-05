'use strict';

let express = require('express');
let app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('WelCome...');
});

app.get('/GetPageData/', function (req, res) {
  
  const pageSize = 25;

  //Read data 
  let data = JSON.parse(fs.readFileSync("Server/Assets/data.json"));
  // Sort data
  data.sort();
  
  let endIndex = (req.query.index + 1) * pageSize;
  let startIndex = (endIndex - pageSize);

  let pageData = data.slice(startIndex, endIndex);
  //console.log(`Ppage index ${req.query.index} ppage length = ${pageData.length}`);
  res.send(pageData);
});

let server = app.listen(2200, function () {
  console.log('Running server on 2200 port.');
});

exports.stopServer = function () {
  server.close();
};