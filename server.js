var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res)=>{
	res.render('signup.ejs');
})


app.listen(3000, ()=>{
	console.log('Server is running!');
});