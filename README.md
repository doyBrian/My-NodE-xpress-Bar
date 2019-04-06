# My-NodE-xpress-Bar
A simple drink order logger that uses MySQL, Node, Express, Handlebars and an ORM. 

### Overview
This project follows the MVC design pattern; uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML.

* My-NodE-xpress Bar is a bar app that lets users input the names of drinks they'd like to order.

* Whenever a user submits a drink, the app will display it on the left side of the page -- waiting to be `Pick up!`.

* Each drink in the waiting area also serves as a `Pick up!` button. When the user clicks it, the drink will move to the right side of the page indicating it has been picked up.

* The app will store every drink in a database, whether pciked up or not.


#### DB Setup

1. Inside the `bar` directory, a folder named `db` is created.

2. In the `db` folder, a file named `schema.sql` is created. SQL queries are written in this file that does the following:

   * Create the `bar_db`.
   * Switch to or use the `bar_db`.
   * Create a `drinks` table with these fields:
     * **id**: an auto incrementing int that serves as the primary key.
     * **drink_name**: a string.
     * **pick_up**: a boolean.

3. Still in the `db` folder, a `seeds.sql` file is also created. In this file, queries are inserted to populate the `drinks` table with at least three entries.

4. The `schema.sql` and `seeds.sql` files may be run into the mysql server or the command line.

5. Running these SQL files in the comman line:

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.

#### Config Setup

1. Inside the `bar` directory, a folder named `config` is created.

2. A `connection.js` file is found inside `config` directory.

   * Inside the `connection.js` file, the code to connect Node to MySQL is set up.

   * The connection is then exported.

3. An `orm.js` file inside `config` directory is also created.

   * `connection.js`  is then imported (require) into `orm.js`

   * In the `orm.js` file, the methods that will execute the necessary MySQL commands in the controllers are created. These are the methods that will be used in order to retrieve and store data in the database.

     * `selectAll()`
     * `insertOne()`
     * `updateOne()`

   * The ORM object in `module.exports` is then exported.

#### Model setup

* Inside the `bar` directory, a folder named `models` is created.

  * In `models`, a `drink.js` file is made.

    * Inside `drink.js`, `orm.js` is imported into `drink.js`

    * Also inside `drink.js`, the code that will call the ORM functions using burger specific input for the ORM is created.

    * Export at the end of the `drink.js` file.

#### Controller setup

1. Inside the `bar` directory, a folder named `controllers` is created.

2. In `controllers`, the `drinks_controller.js` file is created.

3. Inside the `drinks_controller.js` file, it will import the following:

   * Express
   * `drink.js`

4. The `router` for the app is created, andthe `router` at the end of the file is exported.

#### View setup

1. Inside the `bar` directory, a folder named `views` is created.

   * The `index.handlebars` file inside `views` directory is created.

   * The `layouts` directory inside `views` directory is created.

     * The `main.handlebars` file inside `layouts` directory is created.

     * The `main.handlebars` file is set up so it's able to be used by Handlebars.

     * The `index.handlebars` is set up to have the template that Handlebars can render onto.

     * A button is created in `index.handlebars` that will submit the user input into the database.

#### Directory structure

All the files and directories from the steps above follows the structure below:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```


