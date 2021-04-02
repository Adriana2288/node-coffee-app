const fs = require("fs")

const obtainingData = () => {
    try {
        const rawData = fs.readFileSync("src/orders.json")
        const strData = rawData.toString()
        return JSON.parse(strData)
    }
    catch (err) {
        return []
    }
}

const saveOrders = (order) => {
  const newOrders = JSON.stringify(order)
  fs.writeFileSync("src/orders.json", newOrders)
}

const takeOrders = (order) => {
    const jsonObj = obtainingData()
    jsonObj.push({coffee: order})
    saveOrders(jsonObj)
}

const removeOrder = (order) => {
    const jsonObj = obtainingData()
    const updatedOrders = jsonObj.filter(item => {
        return item.coffee != order
    })
    saveOrders(updatedOrders)
}

const listOrders = () => {
    const allOrders = obtainingData()
    allOrders.map(order => {
        console.log(order)
    })
}

module.exports = {
    takeOrders,
    removeOrder, 
    listOrders
}