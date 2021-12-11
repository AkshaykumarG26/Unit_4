const app = require("./index")

const connect = require("./configs/db")




app.listen(2122, async function () {
    await connect()
    console.log("listening on 1122")
})