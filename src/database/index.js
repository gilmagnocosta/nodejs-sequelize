const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const User = require("../app/models/User");
const Address = require("../app/models/Address");
const Profile = require("../app/models/Profile");

const conn = new Sequelize(dbConfig);

User.init(conn);
Address.init(conn);
Profile.init(conn);

Address.associate(conn.models);
User.associate(conn.models);
Profile.associate(conn.models);

module.exports = conn;
