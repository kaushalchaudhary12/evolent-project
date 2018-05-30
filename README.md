This application is created using MEAN stack. Here are the prerequisite to run the project
1. install MongoDB --> (create a folter in c drive i.e.  c:/data/db)
2. Express framework 
3. Node js

Steps to run the project-

 1. Take clone/download the project.
 2. go to the project directory and run 'npm install'.
 3. your app should be up and running on port 8080.
 4. now install express framework in the project directory (npm install --save express body-parser cors mongoose nodemon).
 5. run the mongodb server 
       -- cd to C:\Program Files\MongoDB\Server\3.2\bin>
       -- enter command 'mongod.exe'
       -- by default, mongodb server will start at port 27017

6. start the node server
        -- cd to your project directory
        -- enter command 'node server.js' (this wil connect to mongo instance running)

7. We are good to start with our crud operations.
