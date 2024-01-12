const express = require("express");
const path = require("path");
const handlebars = require('express-handlebars');
const homeRoute = require("./route/home");

const port = process.env.PORT || 3000;


const hbs = handlebars.create({extname: "hbs"});
const app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));

console.log(__dirname)

// app.get('/', (req, res) => {
//   res.render('home')
// })

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoute);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);


 