// Main file to serve the API.
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const fs = require("fs");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, fs);
app.listen(port, () => {
  console.log("listening on port %s...", port);
});
