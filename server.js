var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', function(req, res) {
  var tasks = [
    { text: 'Learn JavaScript', editable: false},
    { text: 'Learn Vue' ,  editable: false},
    { text: 'Build todo list', editable: false},
    { text: 'Learn Express', editable: false},
  ]
  res.render('index.ejs', {data: JSON.stringify(tasks)})
})


app.get('/tasks', function (req, res) {
  res.json([
  ])
})

app.listen(1234, function () {
  console.log('Example app listening on port 1234!')
})
