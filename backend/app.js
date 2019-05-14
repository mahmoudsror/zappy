const express = require('express'),
  path = require('path'),
  app= express();

require(path.resolve('init','init.js'))(app);

app.listen(process.env.PORT||5000,() => {
  console.info("Welcome to Zappy Tool, listen to %s", process.env.BACKEND_PORT);
});

module.exports = app;



