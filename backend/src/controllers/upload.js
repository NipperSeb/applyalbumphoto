const db = require('../models')
const Image = db.images

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file)

    if (req.file == undefined) {
      return res.send(`You must select a file.`)
    }

    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: req.file.filename,
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying upload images: ${error}`)
  } finally {
    return res.send(`File has been uploaded.`)
  }
}

module.exports = {
  uploadFiles,
}
