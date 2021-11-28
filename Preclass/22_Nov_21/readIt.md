to import json file in mongo through terminal

mongoimport --drop --collection collectioName --file ~/location of json file that is save in ur system --jsonArray

in above cmd --drop is used to drop the collection if already exist and then collectionName and provide the path of file and then tell the mongo it is going to be json file for that --jsonArray is written in the last

- comparison operators
1. equal
2. not equal
3. greater than
4. greater than eqqual to
5. less than
6. less than equal to
7. in
8. not in

- logical operators
1. AND
2. OR
3. NOT
4. NOR


1. equal
- db.users.find({"age": {$eq: 29}}).pretty()

2. not equal
- db.users.find({"age": {$ne: 23}}).pretty()

3. greater than
- db.users.find({"age": {$gt: 30}}).pretty()

4. greater than equal to
- db.users.find({"age": {$gte: 39}}).pretty()

5. less than
- db.users.find({search field: {$lt: 50}}).pretty()

6. less than equal to
- db.users.find({search field: {$lte: 43}}).pretty()

1. AND
- db.users.find({$and: [{"age": 40},{"gnder": "Male"}]}).pretty()

2. OR
- db.users.find({$and: [{"age": 40},{"gnder": "Male"}]}).pretty()

3. NOT
- db.users.find({"age": {$not: {$gt: 40}}}).pretty()

4. NOR
- db.users.find().pretty()



initialize project
install express
install mongoose by cmd - npm i express mongoose


import the mongoose and express in server.js file
in server file connect is function basically to connect ot mongodb

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test",{
        
    })
}


in above line mongodb is protocol :// is route or path and then localhost is local machine addres bcoz we are working on machine and then 27017 is default port number of mongodb and test is the database name

*mongodb://localhost:27017/dbName*

connect function is an acync function thats why we written a start function


schema is basically table structure

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String,
    age: Number
});

after defining schema create a model out of it

const User = mongoose.model("user", userSchema)

in above line we are defining model always name the maodel with 1st letter uppercase and model take basically 2 parameters 1st one is table name always give collection name singular it automatically plural it in mongo and 2nd one is schema name