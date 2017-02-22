//Apache HiveQL CRUD operations

//create a database table
//IF NOT EXISTS is an optional clause which notifies the user that the database with same name already exists
CREATE DATABASE [IF NOT EXISTS] mydb;

//or 

CREATE SCHEMA mydb;

//to view the list of databases
SHOW DATABASES;

//delete the database(this deletes the database and all the tables)
DROP DATABASE IF EXISTS mydb;

//or 

DROP SCHEMA userdb;

// drops respective tables before dropping the database
DROP DATABASE IF EXISTS userdb CASCADE;

/*create a student table with the following structure
Sr.No	Field Name	Data Type
1		Name		String
2		Age			int
3		GPA			Float
4		Major		String   */

//the data is fed from a text file which has a comment "Student details", the fields are terminated by a tab, lines are terminated by a new line character and it is row formatted
//on adding IF_NOT_EXISTS, does not recreate the table if it already exists
CREATE TABLE IF NOT EXISTS student ( name String,
age int, gpa float, major String)
COMMENT ‘Student details’
ROW FORMAT DELIMITED
FIELDS TERMINATED BY ‘\t’
LINES TERMINATED BY ‘\n’
STORED AS TEXTFILE;

//insert data into the table 
//we can load the data either from local file system or hadoop file system
//'local' is used to specify it is from the local file system, overwrite allows overwriting the data in the table, 
LOAD DATA LOCAL INPATH '..path of the data file'
OVERWRITE INTO TABLE student;

// alter table statement can be used to change the table name, change column names, add columns, delete or replace columns

//renames the table name
ALTER TABLE student RENAME TO std;

//change the column name and datatype
ALTER TABLE std CHANGE name sname String;
ALTER TABLE std CHANGE gpa sname Double;

//add a column
ALTER TABLE std ADD COLUMNS ( 
dept STRING COMMENT 'Department name');

//drop table 
DROP TABLE IF EXISTS std;

