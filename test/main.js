var {database} = require("../")
var {dbServer} = require("../server")

var db = new database({id: "food"})
var server = new dbServer(db)
db.newBook("ingredients")
db.setInBook("ingredients", "sugar", {dishes: "sweet dish", price: 10.50})
db.setInBook("ingredients", "salt", {dishes: "savoury", price: 8})
db.updateInBook("ingredients", "salt", {dishes: "savoury item"})
console.log(db.getFromBook("ingredients", "sugar"))
console.log(db.findInBook("ingredients", {where: "price", is: ">=", value: 5}))
let ex = db.export()
console.log(ex)
db.deleteBook("ingredients")
console.log(db.listBooks())
db.import(ex)
console.log(db.getFullBook("ingredients"))