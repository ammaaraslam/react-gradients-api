// Main file to serve the API.
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

// initializing app
const app = express();
// port
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// listen different routes/endpoints
routes(app);

// start the API
app.listen(port, () => {
  console.log("listening on port %s...", port);
});
