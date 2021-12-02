const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect("mognodb://localhost:27017/file_upload",{
    });
};

module.exports = connect;