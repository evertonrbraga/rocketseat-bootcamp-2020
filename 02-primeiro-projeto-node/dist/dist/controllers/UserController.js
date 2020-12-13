"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../models/User"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class UsersController {
    teste() {
        const user = new _User.default();
    }
}
exports.default = UsersController;
