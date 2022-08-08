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
```

# Usage
```js
//initialise databse in the app
var db = new db.databse({id: "food"})
//connect the db to the server (accessKey is an optional passoword)
var server = new dbServer(db, {accsesKey: 'password123', host: 'localhost', port: 88})
// the host and the port are the default values in this example.
```

Go to the [docs page](https://github.com/imagineeeinc/dino-db#docs) for more information on usage