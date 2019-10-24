const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async load(req, res) {
    const users = await User.findAll({
      attributes: ["id", "name", "email"],
      where: {
        email: {
          [Op.like]: "%teste.com.br"
        }
      },
      include: [
        { association: "addresses", where: { street: "Rua de teste 2" } },
        {
          association: "profiles",
          where: {
            name: {
              [Op.like]: "%Admin"
            }
          }
        }
      ]
    });

    return res.json(users);
  }
};
