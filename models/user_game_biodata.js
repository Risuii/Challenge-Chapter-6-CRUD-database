'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_game_biodata.belongsTo(models.User_game, {as: 'user_games', foreignKey: 'id_user', sourceKey: 'id' });
    }
  };
  User_game_biodata.init({
    id_user: DataTypes.INTEGER,
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_game_biodata',
  });
  return User_game_biodata;
};