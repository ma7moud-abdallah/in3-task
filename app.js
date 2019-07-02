
const express = require('express');
const app = express();

require('./bootstrap/routes')(app);
require('./bootstrap/db')();


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

  
  
  