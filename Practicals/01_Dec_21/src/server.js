const app = require("./index")

const connect = require("./config/db")

app.listen(1122, async function () {
    await connect()
    console.log("listening on 1122")
})


