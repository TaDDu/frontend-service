const express = require("express");
const app = express();
const morgan = require("morgan");
const http = require("http");
const eStatics = require("e-statics")(app);
app.use(
  morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms"
  )
);
app.use(eStatics.counter);
app.use(express.static("build"));
const port = 8080;
app.listen(port, () => {
  console.log("Listening to port: %i", port);
});
