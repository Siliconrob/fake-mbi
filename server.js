const express = require('express');
const app = express();

// your code here!
app.get('/', (req, res) => res.json({
  hostname: req.hostname
                                    }));

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
