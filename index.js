const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/people', (req, res) => {
  res.json(
    [
      {
        name: "Nathanael",
        birthdate: "01/01/2000",
      },
      {
        name: "Sam",
        birthdate: "06/02/1982",
      }
    ]
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

