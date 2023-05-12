const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const InitiateMongoServer = require("./db");
const user = require("./routes/user");
const todo = require("./routes/todos");

InitiateMongoServer();

const app = express();
const port = 3000;

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "AWS Back" });
});
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/user", user);
app.use("/todo", todo);

app.listen(port, () => {
  console.log(`Back listening on port ${port}!`);
  console.log(`http://127.0.0.1:${port}`);
});
