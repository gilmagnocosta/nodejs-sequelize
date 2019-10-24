const Profile = require("../models/Profile");
const User = require("../models/User");

module.exports = {
  async list(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: "profiles",
        through: {
          attributes: [] // Não mostra os dados da tabela pivot. Querendo mostrar só algum campo especifico do pivot, colocar no array
        }
      }
    });

    return res.json(user.profiles);
  },

  async create(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status.json({ error: "User not found" });
    }

    const [profile, created] = await Profile.findOrCreate({
      where: { name }
    });

    await user.addProfile(profile);

    return res.json(user);
  },

  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status.json({ error: "User not found" });
    }

    const profile = await Profile.findOne({
      where: { name }
    });

    await user.removeProfile(profile);

    return res.json();
  }
};
