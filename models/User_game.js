'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_game.hasOne(models.User_game_biodata, {as: 'user_game_biodatas', foreignKey: 'id_user', sourceKey: 'id' });
      User_game.hasMany(models.User_game_history, {as: 'user_game_histories', foreignKey: 'id_user', sourceKey: 'id' });
    }
  };
  User_game.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User_game',
  });
  return User_game;
};