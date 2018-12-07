var express = require('express'),
      app = express();
var todoRoutes = require('./routes/todos');
var bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.get('/', function(req,res){
res.sendfile('index.html');
});

app.use('/api/todos',todoRoutes);
app.listen(8081, function(){

    console.log("app is running on port 8081")
});
