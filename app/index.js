const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello from the CI/CD pipeline!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
