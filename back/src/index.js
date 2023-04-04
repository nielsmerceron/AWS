const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./db");

InitiateMongoServer();

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "AWS Back" });
});

app.listen(port, () => {
  console.log(`Back listening on port ${port}!`);
  console.log(`127.0.0.1:${port}`);
});
