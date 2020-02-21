const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(__dirname + "/public"));

app.post("/echo", (req, res) => {
  res.json({
    hostname: req.hostname,
    query: req.query,
    body: req.body,
    params: req.params
  });
});

app.get("/fakeData", (req, res) => {
  let fakeName = faker.name;
  res.json({
    firstName: fakeName.firstName,
    lastName: fakeName.lastName,
    dob: faker.date.past(10)
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
