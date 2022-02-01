const db = require('../models')
const Images = db.images

const fetchImages = async (req, res) => {
  await Images.findAll({
    attributes: ['data'],
  }).then(function (list) {
    res.status(200).json(list)
  })
}

module.exports = {
  fetchImages,
}
