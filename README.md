...
##Wildlife-Tracker...


## ![Animals](https://github.com/kangogopeter/Wildlife-Tracker/blob/master/src/main/resources/public/images/logo.gif)

## Accessing my repository
..open terminal and locate it to your desired folder:

cd Documents && mkdir Wildlife-Tracker;

git clone https://github.com/kangogopeter/Wildlife-Tracker.git

##Technologies used:

1.Java;

2.IntelliJ;

3.Gradle;

4.PSQL Database;

 5. Importation.

##Behaviour Driven Development


               --------------------------------------------------------------------------|
               |                INPUT                      |       OUTPUT                |
               --------------------------------------------------------------------------|
               |CREATE DATABASE wildlife_tracker;          |created database for tracking|
               --------------------------------------------------------------------------
               | CREATE TABLE animals (id serial PRIMARY   |name to co-ordinate with the |
               | KEY,health varchar,age int, name varchar);|   sightings .java           |
               --------------------------------------------------------------------------|
               |CREATE TABLE sightings (id serial PRIMARY  | a table to co-ordinate with |
               | KEY, description varchar);                |  the java App that is create|
               |                                           |  d                          |
               --------------------------------------------------------------------------|
               |App.java addition of routing  to           |get and post to retrieve user|
               |       gain access of rangers data         |information and display      |
               ---------------------------------------------------------------------------

##How to test

..In the terminal
~gradle test

##How to run

..In the terminal
~gradle run

##How to build the cloned project

..In the terminal again
~gradle build



##In PSQL in the terminal:
CREATE DATABASE wildlife_tracker;

/c wildlife_tracker;

CREATE TABLE endangered_animals (id serial PRIMARY KEY, name varchar,personID int,health varchar,age varchar);

CREATE TABLE sightings (id serial PRIMARY KEY, animal_id int, location varchar, ranger_name varchar);
