const path = require('path');
const express = require('express')
const expressHandlebars = require('express-handlebars');
const methodOverride = require('method-override')
const app = express()
const port = 3000
const morgan = require('morgan')
const route = require('./routes')
const db = require('./config/db')

// Connect db
db.connect();
app.use(express.json()); 


app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


//HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', expressHandlebars.engine({
  extname : ".hbs",
  helpers: {
    sum: (a, b) => a + b,
}
}));


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.use(methodOverride('_method'))

route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})