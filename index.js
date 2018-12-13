const express = require("express");
const app = express();
const morgan = require("morgan");
const http = require("http");
app.use(
  morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms"
  )
);
app.use(express.static("build"));
const port = 8080;
const server = http.createServer(app).listen(port);
