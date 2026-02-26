const orders = require("../data/orderData");

// GET all orders
const getOrders = (req, res) => {
    res.json(orders);
};

// CREATE new order
const createOrder = (req, res) => {
    const { userId, items } = req.body;

    if (!userId || !items) {
        return res.status(400).json({
            message: "UserId and items are required"
        });
    }

    const newOrder = {
        id: orders.length + 1,
        userId,
        items
    };

    orders.push(newOrder);
    res.status(201).json(newOrder);
};

module.exports = {
    getOrders,
    createOrder
};