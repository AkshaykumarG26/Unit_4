const multer = require('multer')


const storage = multer.diskStorage({
    destination: function(req, file, callback) {}
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: fileFilter
})

module.exports = upload