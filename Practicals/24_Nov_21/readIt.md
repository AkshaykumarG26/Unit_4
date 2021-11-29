npm init -y
npm install express --save
npm i mongoose

1. connect to mongodb server

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test")
}
here we do not need to pass the extra options those covered in preclass bcoz we r using mongoose version 6

app.listen(4321, async function (){
    await connect()
    console.log("listening on port 4321 24_Nov_21 Practical session")
})

if terminal showing the output of listening on port number then it is connected succefully



2. create a schema for our data
3. create model from schema


