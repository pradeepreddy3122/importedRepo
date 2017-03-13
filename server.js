var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    
    title:'Article One',
    content:"  <h1>Article one html page</h1>"
    
};


  
    var template = "<!DOCTYPE html>
<head>
    <title>Article One</title>
     <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
    
        <hr>
    
        <div>
           <h1>Article one html page</h1>
        </div>
    
    </div>
</body>

</html>
";

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/article-one',function(req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html')); 
});

app.get('/article-two',function(req,res) {
    res.send("article two requested");
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
