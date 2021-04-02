const yargs = require("yargs")
const { takeOrders, removeOrder, listOrders } = require("../utils/orders")

const request = process.argv[2]

if (request === "order") {
    console.log("ordering a coffee")
    takeOrders(yargs.argv.coffee)
} else if (request === "remove") {
    console.log("removing an order")
    removeOrder(yargs.argv.coffee)
} else if (request === "list") {
    console.log("listing all orders")
    listOrders()
} else {
    console.log("Wrong command. Please try again")
}