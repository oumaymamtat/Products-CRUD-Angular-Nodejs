const express = require('express');
var cors = require('cors');

const bodyParser = require('body-parser');
// create express app
const app = express();
app.use(cors());

// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require product routes
const productRoutes = require('./src/routes/product.routes');
// using as middleware
app.use('/api/products', productRoutes);
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});