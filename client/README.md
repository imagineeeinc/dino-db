<p align="center">
	<img src="https://raw.githubusercontent.com/imagineeeinc/dino-db/main/dino-db.png" width="30%">
</p>
<h1 align="center">Dino DB Client</h1>

The Dino db client is used to connect to remote instances of dino db.
It streamline the http requests into an easy to use api as if you had full local access.

# Installing
```shell
# npm
npm install dino-db-client
```

```js
// node
const dinoClient = require('dino-db-client');

//browser
import * as dinoClient from 'https://unpkg.com/dino-db-client@latest/src/main.es.min.js'
```

First check out how to start a database using the cross platform database module [dino-db](https://www.npmjs.com/package/dino-db)

Then check out on how to expose your database with the [server extension](https://www.npmjs.com/package/dino-db-server) so you can connect using this client.

# Usage
```js
//initialise client on local server with default port (accsesKey is optional and is only required if your server is configered that way)
var client = new dinoClient.remoteClient({url: 'http://localhost:88', accsesKey: 'password123' })
// Use the normal api avalible
// Example (top level await required for this to run in normal context)
await cl.getInBook('ingredients', 'sugar')
```

Go to the [docs page](https://github.com/imagineeeinc/dino-db#docs) for more information on usage