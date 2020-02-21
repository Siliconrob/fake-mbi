const express = require("express");
const bodyParser = require('body-parser');
const faker = require('faker');
const app = express();
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(express.static(__dirname + '/public'));

app.post("/echo", (req, res) => {
  res.json({
    hostname: req.hostname,
    query: req.query,
    body: req.body,
    params: req.params
  });
});

app.get("/fakeData", (req, res) => {
  
  const fakeName = faker.name;  

  const max = 120;
  const min = 50;  
  let randomDate = new Date(+(new Date()) - Math.floor(Math.random()*10000000000));
  const minDate = randomDate.setYear(randomDate.getYear() - max);  
  const maxDate = randomDate.setYear(randomDate.getYear() - min);  
  const randomDate = faker.date.between(minDate, maxDate);
  
  res.json({
    firstName: fakeName.firstName,
    lastName: fakeName.lastName,
    dob: randomDate    
  });  
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
