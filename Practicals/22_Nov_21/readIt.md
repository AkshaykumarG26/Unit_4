in db collections are logical grouping of data

in db data stored in json object in this each key called field json object called document and each n every property called field 

4 - terminologies
    1 - database
    2 - collections
    3 - document
    4 - field

db contains collections and collections contains document and documents contain field


mongo worked in a cluster => a set of things 



- show dbs
- use dbName => mongo first check if dbName slready exist or not if not it will create new db called as dbName that u given
- show dbs => it will show all dbs if any db dose not have any collection then it will not show that db
- db.createCollection("collectionName") => it will create collection
- db.collectionName.insert({json object}) => it will insert data into collection
- show collections
db.help() => this will tell u what all options are available
db.dropBatabase() => is to delete db

CRUD

* C - create
- db.collectionName.insert({first_name: "Akshaykumar", last_name: "Gullapalli", email: "akshay@gmail.com", gender: "Male", ip_address: "192.168.1.1", age: 24})
- db.collectionName.insertMany([{{first_name: "Akshaykumar", last_name: "Gullapalli", email: "akshay@gmail.com", gender: "Male", ip_address: "192.168.1.1", age: 24}}, {first_name: "akshay", last_name: "adnas", email: "asdlkna@gmail.com", gender: "Male"]) => to insert more documents the data should be passsed in array and it can have many fields 

* R - read
- db.collectionName.findOne() => it will return only one item. it will return very first item of the collection
- db.collectionName.find().pretty() => it will return all the data available in collection in a proper manner .pretty() is used to show data in proper manner

* U - update
- db.collectionName.update({searched filed}, {update that u want}) => it will replace ectire serached item that u searched  *u need to very carefull when u updating the item* to overcome this always use $set in update cmd just like given below
- db.colectionName.update({searched field}, {$set: {content that u want to write}})
*if u dont write $set it is basically put operation and if write $set it is patch opeartion*

* D - delete
once u delete the data it will delete permanantly *make sure while delete*
*update and delete are called destructive operatios be carefull while updating and deleting*
delete has two deffrent cmd 
1. remove
2. delete and deleteManay

- db.collectionName.remove({unique id}) => it will remove only the data of given id
- db.collectionName.remove({non unique field}) => it will remove all the data of given field
- db.collectionName.deleteOne({searched field}) => it will delte only one item that of 1st occurence
- db.collectionName.deleteMany({searched field}) => it will delete all the items pf searched filed
