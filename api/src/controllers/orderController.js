const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateOrderById = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteOrderById = async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getApproveOrdersWithShortTime = async (req, res) => {
  const twoDaysFromNow = new Date(new Date().getTime() + 2*24*60*60*1000);
  try {
    const orders = await Order.find({
      status: 'Approve',
      shippingPromise: { $lt: twoDaysFromNow }
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getTravelingOrdersInRange = async (req, res) => {
  const { startDate, endDate } = req.query; // Las fechas vienen en el query string
  try {
    const orders = await Order.find({
      status: 'Traveling',
      createDate: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};