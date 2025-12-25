This is a base node js project template,which anyone can see and use it as it has been prepared,by keeping some of the most important code principles and projectt management recommendations.feel free to change anything.



`src`->INside the src folder all the actual source code regarding the project will reside,this will not include any kind of tests.(you might want to makebseparate tests folder)
-`config` ->IN this folder anything regarding any configuration setup of a liberary or module will be done.for example: setting up `dotenv` so that we can use use the environment variable anywhere in a cleaner fashion this is done in the `server-config.js`.one more example can be to setup you logging liberary thatt can help you to prepare meaningful logs,so configuration for this liberary should also be done here,

`routes`-> in the routes folder you register a route and bind which controller or middleware will trigger one by one when some body call that routes 

`middlewares` ->they are just going to intercept the incoming the incoming requests where we can write our validators ,authenticators etc .
`controller` ->they are kind of the last middlewares as post them you call you business layer to excute the business logic. in controllers we just receive te incoming request and data and then pass it to the business layer ,and once bussiness layer return an output,we structure the API response in controllers and send the output.

`repository ` ->this folder contain all the logic using which we interect the DB by writting queries,all the raw queries or ORM queries will go here.

`services`-> contain the business logic  and intreacts with repositories for database 

`utils`->contains helper methods,error classes etc.

### setup the project
->download this template from github and open it in your favorite text editor. 
-In the root directory create a`.env` filw=e and add te following env variables
```
PORT=<port number of your choice> 
```
ex:
```
PORT=3000
```

-go inside the `src` folder and excute the following commond:
```
npx sequelize init
```
-By excuting this commond you you will get migereation and seeders folder along with a config.jsoninside the config folder.

Inside the `src/config` folder create a file named `config.json` and write the following code:
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
````
If you are setting up your development environment,then write the username of your db,password of your db and indialect mention whatever db you are using  ex mysql,maria db etc
-If you are setting up test or prod environment ,make sure you also replace the hos with the hosted db url.

