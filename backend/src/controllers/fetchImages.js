const db = require('../models')
const Images = db.images

const fetchImages = (req, res) => {
  Images.findAll({ attributes: ['data'] })
    .then((data) => {
      res.json(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}
module.exports = {
  fetchImages,
}
