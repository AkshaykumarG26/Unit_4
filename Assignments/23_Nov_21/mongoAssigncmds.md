- mongoimport --db --movieDB --drop --collection --moviesData ~/Desktop/Unit_4/Assignments/23_Nov_21/movie_data.json --jsonArray

- show dbs

- use movieDB

1 - db.moviesData.find({"movie_name": {$eq: "Jabberwocky"}}, {"movie_name": 1, "production_year": 1}).pretty()
2 - db.moviesData.find({"movie_name": {$ne: "Jabberwocky"}}, {"movie_name": 1, "production_year": 1}).pretty()

3.1 - db.moviesData.find({"budget": {$gt: 17780}}, {"movie_name": 1, "production_year": 1}).pretty()
3.2 - db.moviesData.find({"budget": {$gte: 17780}}, {"movie_name": 1, "production_year": 1}).pretty()

4.1 - db.moviesData.find({"budget": {$lt: 20000}}, {"movie_name": 1, "production_year": 1}).pretty()
4.2 - db.moviesData.find({"budget": ($lte: 20000)}, {"movie_name": 1, "production_year": 1}).pretty()

5 - db.moviesData.find({$and: [{"production_year":{$gt: 2000}},{"budget": {$gt: 10000}}]}, {"movie_name": 1, "production_year": 1, "budget": 1}).pretty()

6 - db.moviesData.find({$or: [{"production_year":{$gt: 2000}},{"budget": {$gt: 10000}}]}, {"movie_name": 1, "production_year": 1, "budget": 1}).pretty()

7 - db.moviesData.find({$nor: [{"production_year":{$gt: 2000}}, {"budget": {$gt: 10000}}]}, {"movie_name": 1, "production_year": 1, "budget": 1}).pretty()

8 - db.moviesData.find({$not: [{$or: [{"production_year":{$gt: 2000}},{"budget": {$gt: 10000}}]}], {"movie_name": 1, "production_year": 1, "budget": 1}).pretty()

9 - db.moviesData.find({"production_year": {$in: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007 2008, 2009, 2010]}}).pretty()

10 - db.moviesData.find({}).sort({production_year: 0, movie_name: -1, movie_name: 1}).pretty()

11 -
