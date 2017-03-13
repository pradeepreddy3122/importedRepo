var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
      'article-one' : {
    
    title:'Article One',
    content:'Article one html page'
     },
     
     'article-two' : {
          title:'Article Two',
    content:'Article two html page'
     }
    
};
function createTemp(data) {
    
var title= data.title;
var content = data.content;
var template = `
<html>
<head>
    <title>${title}</title>
     <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
    
        <hr>
    
        <div>
           <h1>${content}</h1>
        </div>
    
    </div>
</body>

</html>

`;
return template;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/:articleName',function(req,res) {
    var articleName = req.params.articleName;
   res.send(createTemp(articles[articleName]));
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
