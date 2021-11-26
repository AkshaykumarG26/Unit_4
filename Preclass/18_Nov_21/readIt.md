mongodb is nosql db 
sql is structured query language where it follow structure way of storing data
two disdvantages laid to use nosql
1 regelity of teble design we have to define waht are the columns and we cant add any column after created 
2 horizontal scaling problem scaing is basically growwing something from 1x to 10x there are 2 types of scaling 1st is horizontal 2nd is vertical scaling 
1 vertical scaling means suppose u have 128gb hdd and u want to increase the size of hdd u replace the 128gb with 1tb hdd
2 horizontal scaling means suppose u have 128gb hdd if u want to increase it to 1tb then in this case u get 10 number of 128gb hdd it means infrastructure by adding more physical hardware

sql databases are - PostgreSQL - MySQL - Microsoft SQL - MariaDB

cmd may differe in sql and nosql dbs 

Install mongo - https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

after isnatlling if mongo dose not work then opoen terminal and then enter below cmd
-$ sudo apt-get purge mongodb-org*
and then
-$ mongo
it will work properly

mongodb://127.0.0.1:27017

in above link mongodb is protocol and 127.0.0.1 is basically ip address ad the 27017  is port number of mongodb it is by default port number for the mongodb

in mongo shell

- show dbs => it will show all the daatabases that are avaialeble in the mongo

- use dbname => it will switched to the db that u want to use

- db.dropDatabase() => it will delete the db

- use dbname => to create new db if dbname does not exist it will create new db or else it  will the db

- show collections => it will show collections present in db

- db.createCollection("collectionName") => it will create new collection in db

- db.collectionName.insert({"json object"}) => it will insert data into db collection it is basically take json object

- db.collectionName.insertMany([{"1st json object"}, {""another json object}]) => same as above but it will insert many json objects 

- db.collectionName.find({}) => to show the data present in colection if we pass empty object like {} this it will return all the data present into collection

- db.collectionName.find({}).pretty() => same as above but it will show the data in proper manner easy to read 

- db.collectionName.find({"json object or id or anything"}).pretty() => it will return a data that is avaialble with this 


- db.collection.update({"id": "xyz" or anything},{$set:{"lastName": "Gullapalli"}}this is example) => it takes two items one is document to be searched and another that u want to change the field


- db.collection.update({serach document like id}, {$set: {if does not exist column that u want to add}}) => to add columns if column does not exist it will add the column or else it update to existing column 


for example  

{"_id": "lsndsjdfns", "fName": "akshay", "lName": "gullapalll"}
{"_id": "slknasksls", "fName": "akash", "lName": "pudur"}
{"_id": "sklnaskdjs", "fName": "akash", "lName": "nomul", "birthPlace": "India"}
{"_id": "sJdknasjds", "fName": "akshay", "lName": "gullapalll"}
{"_id": "askjdnaskd", "fName": "amit", "lName": "badgu"}


if u want to update the birthplace of akash it will get updated in first occurence of akash it does not modify the existing akash birthplace coz mongo goes line by line the output  will be  if we do

- db.collection.update({"fName": "akahs"}, {"birthPlace": "dubai"})

- db.collection.find()

the output will be

{"_id": "lsndsjdfns", "fName": "akshay", "lName": "gullapalll"}
{"_id": "slknasksls", "fName": "akash", "lName": "pudur", "birthPlace": "dubai"}
{"_id": "sklnaskdjs", "fName": "akash", "lName": "nomul", "birthPlace": "India"}
{"_id": "sJdknasjds", "fName": "akshay", "lName": "gullapalll"}
{"_id": "askjdnaskd", "fName": "amit", "lName": "badgu"}


- db.collection.updateMany({}, {}) => same it is se to update many if same search occurence appier then it will modify all occurences that mongo get 



- db.collection.remove({field that u want ot remove}) => it will remove all the entries with the searched data 

for example 

{"_id": "lsndsjdfns", "fName": "akshay", "lName": "gullapalll"}
{"_id": "slknasksls", "fName": "akash", "lName": "pudur", "birthPlace": "dubai"}
{"_id": "sklnaskdjs", "fName": "akash", "lName": "nomul", "birthPlace": "India"}
{"_id": "sJdknasjds", "fName": "akshay", "lName": "gullapalll"}
{"_id": "askjdnaskd", "fName": "amit", "lName": "badgu"}

this is the data if we use remove just like

- db.collection.remove({"fName": "akash"})

it will remove all the documents with the fName of akash the output will be

{"_id": "lsndsjdfns", "fName": "akshay", "lName": "gullapalll"}
{"_id": "sJdknasjds", "fName": "akshay", "lName": "gullapalll"}
{"_id": "askjdnaskd", "fName": "amit", "lName": "badgu"}


always use unique id to remove a single data so that is does not affect other document for that 

- db.collection.remove({"_id": "sJdknasjds"}) => in this the id is unique so it will remove the document whose id is matches the output will be


{"_id": "lsndsjdfns", "fName": "akshay", "lName": "gullapalll"}
{"_id": "askjdnaskd", "fName": "amit", "lName": "badgu"}




