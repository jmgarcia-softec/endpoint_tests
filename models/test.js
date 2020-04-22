"use strict";
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define(
    "Test",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER
    }
  );
  return Test;
};
