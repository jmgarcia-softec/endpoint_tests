'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const bodyParser = require("body-parser");
const cors = require("cors");
const models = require("./models")
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

app.use(cors());
// Max data to receive 3mb
app.use(bodyParser.json({ limit: 1024 * 1024 * 3 }));
SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || 10010;
  models.sequelize.sync().then(function() {
  app.listen(port);
  });

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
});
