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

app.get("/fakes", (req, res) => {
  const fakeName = faker.name;

  const max = 120;
  const min = 60;
  const randomYears = Math.floor(Math.random() * (max - min + 1)) + min;

  res.json({
    firstName: fakeName.firstName(),
    lastName: fakeName.lastName(),
    dob: faker.date.past(randomYears)
  });
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
