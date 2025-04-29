const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public')); 
app.set('view engine', 'ejs');


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});