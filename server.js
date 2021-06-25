// middleware
const express = require('express');
const bodyParser = require ('body-parser');
const Router = require("./routes/routes");
const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use(express.static('public'));

// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.use(Router);
// listen for requests
app.listen(port,'0.0.0.0', () => {
    console.log(`Server is listening on port ${port}`);
});