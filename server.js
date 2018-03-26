var express = require('express');
var app = express(); 

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('public'));		

var albums = [
	{
	  title: 'Cupid Deluxe',
	  artist: 'Blood Orange'
	},
	{
	  title: 'M3LL155X - EP',
	  artist: 'FKA twigs'
	},
	{
	  title: 'Fake History',
	  artist: 'letlive.'
	}
];

var taquerias = [
	{ name: "La Taqueria" },
	{ name: "El Farolito" },
	{ name: "Taqueria Cancun" }
];

app.get('/', function(req, res) {
	console.log('GET /');
	res.sendFile('views/index.html', { root : __dirname });
	console.log('****')
	console.log(__dirname)
});

app.get('/api/albums', function(req, res) {
	res.json(albums);
})


app.get('/api/taquerias', function(req, res) {
	res.json(taquerias);
})

app.listen(3000, function() {
	console.log('listening to 3000');
});