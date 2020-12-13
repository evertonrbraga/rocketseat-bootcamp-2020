"use strict";

var _express = _interopRequireDefault(require("express"));

require("./controllers/UserController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.get('/', (request, response) => {
  return response.json({
    message: 'Hello World'
  });
});
app.listen(3333);