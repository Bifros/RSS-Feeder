const express = require('express');
const bodyParser  = require('body-parser');
const NodeCouchDb = require('node-couchdb');
const path = require('path');
const request = require('request');
const utils = require('./server/utils');
const parser = require('rss-parser');

const couch = new NodeCouchDb({
  auth: {
    user: 'admin',
    password: 'q1w2e3r4'
  }
});

const dbName = 'rss_db';
couchViewUrl = '_design/all_channels/_view/all';
//const parser = require('html-to-json');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true})); 

app.listen(9001, function () {
  console.log('Server is on 9001 port');
  console.log(path.join(__dirname, 'build'));
});


app.get('/saved/channels', function(req, res) {
  couch.get(dbName, couchViewUrl).then(function(data, headers, status) {
    var channels = utils.normalizeDbReponse(data.data.rows);



    res.json(channels);
  }, function(err) {
    console.log(err);
    res.send(err);
  });
});

app.put('/saved/channels', function(req, res) {
  const newChannel = req.body.newChannel; 

  couch.uniqid().then(function(ids) {
    const id = ids[0];

    couch.insert(dbName, {
      _id: id,
      name: req.body.newChannel.name,
      link: req.body.newChannel.link
    }).then(function(data, headers, status) {
      console.log('New channel ' + req.body.newChannel.name + ' was sucessfully added.');
    }, function(err) { 
      console.log(err); 
    });
  });
});

// http://www.techradar.com/rss/news/software

app.post('/channel/feeds', function(req, res) {
  const channelUrl = req.body.url;

  parser.parseURL(channelUrl, function(err, parsed) {
    if (err) throw err;
    console.log(parsed);
    res.send(parsed);
  });
});