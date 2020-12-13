"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.Router();
routes.post('/users', (req, response) => response.json({ message: 'Hello World!' }));
exports.default = routes;
