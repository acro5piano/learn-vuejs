var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.render('index.ejs',
             {data:
              [
               { text: 'Learn JavaScript', editable: false},
               { text: 'Learn Vue' ,  editable: false},
               { text: 'Build todo list', editable: false},
              ]})
})


app.get('/tasks', function (req, res) {
  res.json([
      { text: 'Learn JavaScript', editable: false},
      { text: 'Learn Vue' ,  editable: false},
      { text: 'Build todo list', editable: false},
  ])
})

app.listen(1234, function () {
  console.log('Example app listening on port 1234!')
})
