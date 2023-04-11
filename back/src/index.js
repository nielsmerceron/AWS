const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./db");
const user = require("./routes/user");

InitiateMongoServer();

const app = express();
const port = 3000;

app.use(helmet());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "AWS Back" });
});

app.use("/user", user);

app.listen(port, () => {
  console.log(`Back listening on port ${port}!`);
  console.log(`http://127.0.0.1:${port}`);
});
