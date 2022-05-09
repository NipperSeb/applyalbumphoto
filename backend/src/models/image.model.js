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
    createdAt: {
      type: DataTypes.DATE,
      get: function () {
        // or use get(){ }
        return this.getDataValue('createdAt').toLocaleString('fr-FR')
      },
    },
  })

  return Image
}
