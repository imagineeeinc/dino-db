const axios = require('axios').default

exports.remoteClient = class remoteClient {
	constructor(options) {
		this.url = options.url || '///:88'
		this.accsesKey = options.accsesKey || undefined
		/*
		this.cacheForOffline = options.cacheForOffline || false
		this.offlineCache = {}
		*/
	}
	async getFullBook(name) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/getfullbook`, {
				params: {
					name: name,
					key: this.accsesKey
				}
			})
			let data = res.data
			if (data.succses == true) {
				return data.data
			} else {
				return new Error(data.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async newBook(name) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/newbook`, {
				params: {
					name: name,
					key: this.accsesKey
				}
			})
			let data = res.data
			if (data.succses == true) {
				return data.data
			} else {
				return new Error(data.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async setInBook(name, id, data) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/setinbook`, {
				params: {
					name: name,
					id: id,
					data: JSON.stringify(data),
					key: this.accsesKey
				}
			})
			let out = res.data
			if (out.succses == true) {
				return out.data
			} else {
				return new Error(out.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async updateInBook(name, id, data) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/updateinbook`, {
				params: {
					name: name,
					id: id,
					data: JSON.stringify(data),
					key: this.accsesKey
				}
			})
			let out = res.data
			if (out.succses == true) {
				return out.data
			} else {
				return new Error(out.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async getFromBook(name, id) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/getfrombook`, {
				params: {
					name: name,
					id: id,
					key: this.accsesKey
				}
			})
			let data = res.data
			if (data.succses == true) {
				return data.data
			} else {
				return new Error(data.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async findInBook(name, options) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/findinbook`, {
				params: {
					name: name,
					query: JSON.stringify(options),
					key: this.accsesKey
				}
			})
			let data = res.data
			if (data.succses == true) {
				return data.data
			} else {
				return new Error(data.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async deleteInBook(name, id) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/deleteinbook`, {
				params: {
					name: name,
					id: id,
					key: this.accsesKey
				}
			})
			let data = res.data
			if (data.succses == true) {
				return true
			} else {
				return new Error(data.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async deleteBook(name) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/getfullbook`, {
				params: {
					name: name,
					key: this.accsesKey
				}
			})
			let data = res.data
			if (data.succses == true) {
				return true
			} else {
				return new Error(data.error)
			}
		} catch(err) {
			console.error(err);
		}
	}
	async ping(data) {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/ping`, {
				params: {
					data: data,
					key: this.accsesKey
				}
			})
			let data = res.data
			return data
		} catch(err) {
			console.error(err);
		}
	}
	async listBooks() {
		try {
			let res = await axios.get(`${this.url}/dinodb/api/v1/listbooks`, {
				params: {
					key: this.accsesKey
				}
			})
			let data = res.data
			return data.data
		} catch(err) {
			console.error(err);
		}
	}
}