var client = require("../client")

var cl = new client.remoteClient({url: 'http://localhost:88', path: '/' });
(async () => {
	console.log(await cl.getFullBook('ingredients'))
	await cl.setInBook("ingredients", "brownSugar", {dishes: "sweet dish", price: 15.50})
	await cl.setInBook("ingredients", "pinksalt", {dishes: "just food", price: 8.69})
	console.log(await cl.getFromBook('ingredients', "pinksalt"))
	await cl.updateInBook("ingredients", "pinksalt", {price: 10.69})
	console.log(await cl.findInBook("ingredients", {where: "price", is: ">=", value: 10}))
})()