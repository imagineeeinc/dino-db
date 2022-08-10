#!/usr/bin/env node

let {database} = require('dino-db')
let {dbServer} = require('dino-db-server')

var db = new database({id: 'cli-db'})
var server = new dbServer(db)