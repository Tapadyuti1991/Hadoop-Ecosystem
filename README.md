# Hadoop-Ecosystem

Hadoop is an open source, Java-based programming framework that supports the processing and storage of extremely large data sets in a distributed computing environment. The Hadoop platform consists of two key services: a reliable, distributed file system called Hadoop Distributed File System (HDFS) and the high-performance parallel data processing engine called Hadoop MapReduce. The combination of HDFS and MapReduce provides a software framework for processing vast amounts of data in parallel on large clusters of commodity hardware (potentially scaling to thousands of nodes) in a reliable, fault-tolerant manner. Hadoop is a generic processing framework designed to execute queries and other batch read operations against massive datasets that can scale from tens of terabytes to petabytes in size.

The Hadoop ecosystem includes other tools to address particular needs. Hive is a SQL dialect and Pig is a dataflow language for that hide the tedium of creating MapReduce jobs behind higher-level abstractions more appropriate for user goals. 

# Apache Hive

Hive is a SQL-based data warehouse system for Hadoop that facilitates data summarization, ad hoc queries, and the analysis of large datasets stored in Hadoop-compatible file systems (e.g., HDFS, MapR-FS, and S3) and some NoSQL databases. The repo has a tutorial, installation instructions and sample programs for setting up Hive on your local system as well as on Docker.

# MongoDB

MongoDB is a cross-platform, document oriented database that provides, high performance, high availability, and easy scalability. MongoDB works on concept of collection and document. MongoDB uses JSON-like documents with schemas. The repo has a tutorial, sample programs and installation instructions for setting up MongoDB on your local system.

# Apache Presto

Data analytics is the process of analyzing raw data to gather relevant information for better decision making. It involves working with large amount of data.  As the size of data is continuously growing, we need a system which works efficiently with Petabyte size data with low latency. Facebook designed Apache Presto which is a distributed parallel query execution engine, optimized for low latency and interactive query analysis. The repo has a tutorial, sample programs and installation instructions for setting up Apache Presto on your local system and as well as on Docker. It also includes the differences between Hive and Presto and scenarios where each one is more suitable over the other.
