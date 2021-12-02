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
const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: false},
    emial: {type: String, required: true},
    gender: {type: String, required: false, default: "Male"},
    age: {type: Number, require: true}
})


3. create model from schema

const User = mongoose.model("user", userSchema) // always give collection name singular here mongo will make it plural



.lean() is used in find to tell mongoose to return only json object we dont need any thing else  => when we use find this will return a mongoose object but whatever data we are getting we need to send it front end we dont need monggose object so this lean() return a proper data (data return by lean() is to be a json object)

.exec() is used => mongoose does not know that find is last part of the query , mongoose instead of return proper promise it returns *thennable* it means kind of promise its not a promise when u do .exec() mongoose returns a proper promise


app.use(express.json()) => any time that u r getting any data in the body of the request u need express.json if it is going to be a json body 