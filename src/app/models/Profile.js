const { Model, DataTypes } = require("sequelize");

class Profile extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING
      },
      {
        sequelize
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "profile_id",
      through: "users_profiles",
      as: "users"
    });
  }
}

module.exports = Profile;
