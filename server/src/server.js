var express = require('express')
exports.dbServer = class dbServer {
	constructor(dbRef, options) {
		options = options || {}
		this.host = options.host || "localhost"
		this.port = options.port || 88
		this.accsesKey = options.accsesKey || undefined
		this.dbRef = dbRef
		this.app = express()
		this.setup()
		this.start()
	}
	setup() {
		let app = this.app
		let db = this.dbRef

		app.use((req, res, next) => {
			res.set('Access-Control-Allow-Origin', req.get('origin'))
			if (this.accsesKey != undefined) {
				if (req.query.key != this.accsesKey) {
					res.json({succses: false, error: "accsesKey mismatch"})
				} else {
					next()
				}
			} else {
				next()
			}
		})
		app.get('/dinodb/api/v1/newbook', (req,res) => {
			let r = db.newBook(req.query.name)
			if (r[0] == true) {
				res.json({succses: true})
			} else {
				res.json({succses: false, error: r[1]})
			}
		})
		app.get('/dinodb/api/v1/setinbook', (req,res) => {
			let r = db.setInBook(req.query.name, req.query.id, JSON.parse(req.query.data))
			if (r[0] == true) {
				res.json({succses: true, data: db.getFromBook(req.query.name, req.query.id)})
			} else {
				res.json({succses: false, error: r[1]})
			}
		})
		app.get('/dinodb/api/v1/updateinbook', (req,res) => {
			let r = db.updateInBook(req.query.name, req.query.id, JSON.parse(req.query.data))
			if (r[0] == true) {
				res.json({succses: true, data: db.getFromBook(req.query.name, req.query.id)})
			} else {
				res.json({succses: false, error: r[1]})
			}
		})
		app.get('/dinodb/api/v1/getfrombook', (req,res) => {
			let r = db.getFromBook(req.query.name, req.query.id, "serverMode")
			if (r != undefined) {
				res.json({succses: true, data: r[1]})
			} else {
				res.json({succses: false, error: "page or book not found. make sure you entered the correct details."})
			}
		})
		app.get('/dinodb/api/v1/getfullbook', (req,res) => {
			let r = db.getFullBook(req.query.name, "serverMode")
			if (r != undefined) {
				res.json({succses: true, data: r[1]})
			} else {
				res.json({succses: false, error: "book not found. make sure you entered the correct book name."})
			}
		})
		app.get('/dinodb/api/v1/deleteinbook', (req,res) => {
			let r = db.deleteInBook(req.query.name, req.query.id)
			if (r[0] == true) {
				res.json({succses: true})
			} else {
				res.json({succses: false, error: r[1]})
			}
		})
		app.get('/dinodb/api/v1/deletebook', (req,res) => {
			let r = db.deleteBook(req.query.name)
			if (r[0] == true) {
				res.json({succses: true})
			} else {
				res.json({succses: false, error: r[1]})
			}
		})
		app.get('/dinodb/api/v1/findinbook', (req,res) => {
			let r = db.findInBook(req.query.name, JSON.parse(req.query.query))
			if (r[0] != false) {
				res.json({succses: true, data: r})
			} else {
				res.json({succses: false, error: r[1]})
			}
		})
		app.get('/dinodb/api/v1/ping', (req,res) => {
			res.json({succses: true, ping: true, time: Date.now(), data: req.query.data || 'pong'})
		})
		app.get('/dinodb/api/v1/listbooks', (req,res) => {
			res.json({succses: true, data: db.listBooks()})
		})
	}
	start() {
		let app = this.app
    app.listen(this.port, this.host, () => {
      console.log(`Dino DB server started at ${this.host}:${this.port}`)
    })
	}
}