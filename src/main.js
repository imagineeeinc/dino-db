var AES = require("crypto-js/aes")
var enc = require("crypto-js/enc-utf8")
exports.database = class Database {
	constructor(options) {
		this.id = options.id || "DinoDB"+Math.floor(Math.random() * 9999) + 1000
		this._db = {}
	}
	getFullBook(name, server) {
		if (this._db[name]) {
			return server == "serverMode" ? [true, this._db[name]] : this._db[name]
		} else {
			return undefined
		}
	}
	newBook(name) {
		if (typeof name === 'string') {
			this._db[name] = {}
			return [true]
		} else {
			return [false, "name can only be a string"]
		}
	}
	setInBook(name, id, data) {
		if (typeof data === "object") {
			if (typeof id === "string") {
				this._db[name][id] = data
				return [true]
			} else {
				return [false, "The id has to be a string"]
			}
		} else {
			return [false, "The data provided is not a JSON"]
		}
	}
	updateInBook(name, id, data) {
		if (typeof data === "object") {
      if (typeof id === "string") {
        this._db[name][id] = { ...this._db[name][id], ...data }
				return [true]
      } else {
        return [false, "The id has to be a string"]
			}
		} else {
			return [false, "The data provided is not a JSON"]
		}
	}
	getFromBook(name, id, server) {
		if (this.getFullBook) {
			return server == "serverMode" ? [true, this._db[name][id]] : this._db[name][id]
		} else {
			return undefined
		}
	}
	findInBook(name, options) {
		try {
			if (typeof options === 'object') {
				let db = this._db[name]
				let find = ()=>{}
				let found = []
				switch(options.is) {
					case "==":
						find = (id)=>{if (db[id][options.where] == options.value) found.push(db[id])}
						break;
					case "!=":
						find = (id)=>{if (db[id][options.where] != options.value) found.push(db[id])}
						break;
					case ">":
						find = (id)=>{if (db[id][options.where] > options.value) found.push(db[id])}
						break;
					case ">=":
						find = (id)=>{if (db[id][options.where] >= options.value) found.push(db[id])}
						break;
					case "<":
						find = (id)=>{if (db[id][options.where] < options.value) found.push(db[id])}
						break;
					case "<=":
						find = (id)=>{if (db[id][options.where] <= options.value) found.push(db[id])}
						break;
					case "in":
						find = (id)=>{if (db[id][options.where].search(options.value)) found.push(db[id])}
						break;
					case "notIn":
						find = (id)=>{if (!db[id][options.where].search(options.value)) found.push(db[id])}
						break;
					case "inArray":
						find = (id)=>{if (db[id][options.where].indexOf(options.value) > -1) found.push(db[id])}
						break;
					case "inArrayAny":
						find = (id)=>{
							if (typeof options.value === "object") {
								options.value.forEach(value => {
									if (db[id][options.where].indexOf(value) > -1) return found.push(db[id])
								})
							}
						}
						break;
				}
				Object.keys(db).forEach(find)
				return found
			} else {
				return [false, "make sure the options to query is in a JSON format."]
			}
		} catch (err) {
			return [false, err]
		}
	}
	deleteInBook(name, id) {
		try {
			let d = this._db[name][id]
			delete this._db[name][id]
			return [true, d]
		} catch (err) {
			return [false, err]
		}
	}
	deleteBook(name) {
		try {
			let d = this._db[name]
			delete this._db[name]
			return [true, d]
		} catch (err) {
			return [false, err]
		}
	}
	listBooks() {
		return Object.keys(this._db)
	}
	export() {
		let key = this._makeid(16)
		let encrypted = AES.encrypt(JSON.stringify(this._db), key).toString()
		let data = encrypted + key
		return data
	}
	import(data) {
		let key = data.substr(data.length-16, data.length)
		let input = data.substr(0, data.length-17)
		let bytes = AES.decrypt(input, key)
		let output = bytes.toString(enc)
		try {
			let data = JSON.parse(output)
			this._db = data
			return [true]
		} catch (err) {
			return [false, err]
		}
	}
	_makeid(length) {
    var result = '';
    var characters = 'ABCDEF0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
		}
		return result;
	}
}