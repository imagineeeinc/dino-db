<link rel="icon" type="image/svg+xml" href="./dino-db.png" />

<p align="center">
	<img src="./dino-db.png" width="30%">
</p>
<h1 align="center">Dino DB</h1>
<h3 align="center">🦕A small, document-oriented data base🦕</h3>

Dino DB is a light yet robust Database for portable and server applications. A document-oriented based on the design of [firestore](https://firebase.google.com/docs/firestore).

There are separate modules you can add to enhance your usage of DinoDB. There is a server extension which allows you to access the Database from external applications with http requests, there is also a cross platform client which adds a clean api to make requests to your database.

<p align="center">
	<img alt="NPM" src="https://img.shields.io/npm/l/dino-db">
	<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/dino-db">
	<img alt="npm" src="https://img.shields.io/npm/v/dino-db">
	<img alt="npm" src="https://img.shields.io/npm/dm/dino-db">
</p>

# Install
```shell
# npm
npm i dino-db
```
```js
// node
const dinoBb = require('dino');

// browser (skypack)
import * as dinoDb from 'https://cdn.skypack.dev/dino-db'
// browser module bundler
import * as dinoDb from 'dino-db'
```

Check out on how to expose your database to external apps with the [server extension](https://www.npmjs.com/package/dino-db-server).

Then check out on how to connect to the database with the [JavaScript based client](https://www.npmjs.com/package/dino-db-client)
# Usage
```js
//initialise databse in the app
var db = new db.databse({id: "food"})
// Use the normal api avalible
db.setInBook("ingredients", "sugar", {dishes: "sweet dish", price: 10.50})
db.getInBook('ingredients', 'sugar')
```
read more about [data hierarchy](#data-hierarchy) to see how to structure data

# Docs
[Read the docs here](https://imagineee.gitbook.io/dino-db/) (not finished)
# Data Hierarchy

<img src="dino-db-data-hierarchy.png">

Example
```
Food(database)
|
\_raw ingredients(book)
||
|\_sugar(page)
|| |
|| \_usage: "sweet dish"
||   image: "https://example.com/sugar.png"
|\_salt(page)
|| |
|| \_usage: "savoury items"
||   image: "https://example.com/salt.png"
|\_ ...(page)
|
\_dishes(book)
 |
 \_dounut(page)
 | |
 | \_ingredients: ["sugar", ...]
 |   instruction: {step1: ..., step2: ..., ...}
 \_crackers(page)
   |
	 \_ingredients: ["salt", ...]
     instruction: {step1: ..., step2: ..., ...}
```
