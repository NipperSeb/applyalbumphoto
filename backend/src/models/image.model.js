module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('images', {
    type: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.STRING,
    },
  })

  return Image
}
