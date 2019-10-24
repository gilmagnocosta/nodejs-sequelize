const express = require("express");
const UserController = require("./app/controllers/UsersController");
const AddressesController = require("./app/controllers/AddressesController");
const ProfilesController = require("./app/controllers/ProfilesController");
const ReportController = require("./app/controllers/ReportController");

const routes = express.Router();

routes.get("/users", UserController.list);
routes.post("/users", UserController.create);

routes.get("/users/:user_id/addresses", AddressesController.list);
routes.post("/users/:user_id/addresses", AddressesController.create);

routes.get("/users/:user_id/profiles", ProfilesController.list);
routes.post("/users/:user_id/profiles", ProfilesController.create);
routes.delete("/users/:user_id/profiles", ProfilesController.delete);

routes.get("/report", ReportController.load);

module.exports = routes;
