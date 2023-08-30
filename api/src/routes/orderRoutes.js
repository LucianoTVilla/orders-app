const express = require('express');
const orderController = require('../controllers/orderController');

const router = express.Router();

router.post('/create', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);
router.put('/:id', orderController.updateOrderById);
router.delete('/:id', orderController.deleteOrderById);

router.get('/reports/approve-short-time', orderController.getApproveOrdersWithShortTime);
router.get('/reports/traveling-range', orderController.getTravelingOrdersInRange);


module.exports = router;
