const express = require("express");
const app = express();

app.post("/echo", (req, res) => {
  res.json({
    hostname: req.hostname,
    query: req.query,
    params: req.params
  });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});


app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
