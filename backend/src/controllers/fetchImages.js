const db = require('../models')
const Images = db.images
const Op = db.Sequelize.Op

//paging parameter HTTP request URLs
const getPagination = (page, size) => {
  const limit = size ? +size : 12
  const offset = page ? page * limit : 0
  return { limit, offset }
}

//structure for pagination
const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: pictures } = data
  const currentPage = page ? +page : 0
  const totalPages = Math.ceil(totalItems / limit)
  return { totalItems, pictures, totalPages, currentPage }
}

// Retrieve all data with sequelize from the database.
const fetchImages = (req, res) => {
  const { page, size, data } = req.query

  let condition = data ? { data: { [Op.like]: `%${data}%` } } : null
  const { limit, offset } = getPagination(page, size)

  Images.findAndCountAll({
    where: condition,
    order: [['updatedAt', 'DESC']],
    limit,
    offset,
  })
    .then((data) => {
      const response = getPagingData(data, page, limit)
      res.json(response)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving data images.',
      })
    })
}
module.exports = {
  fetchImages,
}
