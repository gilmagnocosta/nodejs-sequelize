const express = require("express");
const UserController = require("./app/controllers/UsersController");

const routes = express.Router();

routes.post("/users/create", UserController.store);

module.exports = routes;
