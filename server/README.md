<p align="center">
	<img src="https://raw.githubusercontent.com/imagineeeinc/dino-db/main/dino-db.png" width="30%">
</p>
<h1 align="center">Dino DB Server</h1>

The Dino db server module is an extension that adds server support to a DB for access from external applications

# Installing
```shell
# npm
npm install dino-db-server
```

```js
// node only
const dinoServer = require('dino-db-server');
// node (es6)
import * as dinoServer from 'dino-db-server'
```
First check out how to start a database using the cross platform database module [dino-db](https://www.npmjs.com/package/dino-db)

Then check out on how to connect to the database with the [JavaScript based client](https://www.npmjs.com/package/dino-db-client)
# Usage
```js
//initialise databse in the app
var db = new db.databse({id: "food"})
//connect the db to the server on localhost:88/ (accessKey is an optional passoword)
var server = new dbServer(db, {accsesKey: 'password123', host: 'localhost', port: 88, path: '/'})
// the host and the port are the default values in this example.
```

Go to the [docs page](https://github.com/imagineeeinc/dino-db#docs) for more information on usage