/*** 
INTRODUCTION TO MongoDB
Everything you see here is taken from MongoDB official docs: https://docs.mongodb.com/
***/

// Start MongoDB by going to MongoDB bin folder
// --dbpath <path to data directory> if you want to specify the dbpath
mongod.exe	
mongo.exe

// shows all existing databases
show dbs	

// points to a specific database. Doesn’t create the database unless it has at least one collection
use big_data	

// db is a pointer that points to the database in use
// Syntax : db.collectionName.function({parameter:value})

// help() gives all the functions available and descriptions
db.help()
db.collection.help()

// createCollection creates a collection
db.createCollection("students") creates a collection	

// get list of collections in db
db.getCollectionInfos()

// CRUD operations
// Create
db.students.insertOne(
   {
	   first_name : "leela gangadhar",
	   last_name : "vallabhaneni",
	   courses_completed : 7,
	   details : {
		   semester : "summer",
		   coop : false
	   },
	   recent_courses : [{course_name : "Advanced Data Sciences"},{course_name : "Big Data using Scala"}]
   }
)

// can use 'var' to create variables and assign any value
var students_list = [
	{
	   first_name : "Dino",
	   last_name : "Constantinopolous",
	   courses_completed : 5,
	   details : {
		   semester : "summer",
		   coop : true
	   },
	   recent_courses : [{course_name : "Data Warehousing"},{course_name : "Big Data using Scala"}]
   },
   {
	   first_name : "Kal",
	   last_name : "Bugrara",
	   courses_completed : 6,
	   details : {
		   semester : "summer",
		   coop : true
	   },
	   recent_courses : [{course_name : "Advanced Data Sciences"},{course_name : "Program Structures and Algorithms"}]
   }
]

// use insertMany to insert multiple BSON objects (documents)
db.students.insertMany(students_list)

// db.inventory.save() is used to update if data already exists where as insert only inserts, doesn't update

// Read
// find() gives all the documents in a collections
db.students.find()
db.students.findOne()
db.students.find().limit(2)
db.students.count()
db.students.find().explain()

// find() can take a document to match searchs
db.students.find({first_name : "Kal"})

/*** 
$or - match any of the specified parameters
$and - match all of the specified parameters 
$lt - less than given value
$ne - not equal to
$gt - greater than given value 
$lte , $gte , $eq
$elemMatch - should match atleast one specified parameter
doc1.doc2
***/
db.students.find( {
     semester: 'summer',
     $or: [ { courses_completed: { $gte: 6 } }, { price: { $lt: 10 } } ]
   })

// can satisfy at least one parameter
db.students.find({
	 semester: { $eq: 6, $eq: 10 }
})

// Update
/*** 
first param : filter
second param : update ( $set )
third param : options doc like multi : true , upsert : true
upsert is update or else insert
if $set not used, then replaces the whole document
***/
db.students.update( {name : "leela"}, 
{ $set : { courses_completed : 5 } })

// multi is used to update multiple matches
db.students.update( {coop : true}, 
{ $set : { courses_completed : 5 } }, 
{multi : true})

// upsert inserts if document match is not found
db.students.update( { name : "Yusuf" }, 
{ courses_completed : 5 }, 
{ upsert : true })

// Delete
// remove(<match-parameters>)
db.students.remove({coop : true})

// removes only first found document
db.students.remove({courses_completed : 5}, true) 

// drop collection
db.students.drop()

// drop database
db.dropDatabase()

/*** 
Importing files to MongoDB 
Dowload data in csv format from this URL: http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data

***/
mongoimport --db flowers --collection iris --type csv --fields sepal_length,sepal_width,petal_length,petal_width,type --file C:\Users\LeelaGangadhar\Desktop\iris.csv

show dbs

use flowers

// Check sample
db.stocks.findOne()

// Map Reduce to find the total count of each 'type' of iris in the dataset (very simple example)

var mapper1 = function(){
	emit (this["type"], {count : 1})
};

var reducer1 = function(key, values){
	var total = 0;
	for(var i=0; i<values.length; i++){
		total = total + values[i].count;
	}	
	return { count : total };
};

db.iris.mapReduce(mapper1, reducer1, { out : "iris_count" })

// check results
db.iris_count.find()

/**
Now lets go a bit forward.
Let's find the averages of sepal_length for the three types of iris.
**/

var mapper2 = function(){
	emit (this["type"], {
		sepal_length : this["sepal_length"]
	})
};

var reducer2 = function(key, values){
	var total = 0;
	for(var i=0; i < values.length; i++){
		total = total + values[i].sepal_length;
	}
	var avg = total / values.length;
	return { sepal_length_avg : avg };
};

db.iris.mapReduce(mapper, reducer, {  out : "iris_avg" })

// check results
db.iris_avg.find().pretty()




