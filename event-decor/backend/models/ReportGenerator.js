const Order = require('../models/Order');

class ReportGenerator {
  // Generate sales report
  async generateSalesReport(startDate, endDate) {
    try {
      const orders = await Order.find({
        createdAt: {
          $gte: new Date(startDate),
          $lte: new Date(endDate)
        }
      }).populate('items.product');

      let totalSales = 0;
      const productSales = {};

      orders.forEach(order => {
        totalSales += order.totalAmount;
        order.items.forEach(item => {
          const productId = item.product._id;
          const productName = item.product.name;

          if (!productSales[productId]) {
            productSales[productId] = {
              name: productName,
              quantity: 0,
              revenue: 0
            };
          }

          productSales[productId].quantity += item.quantity;
          productSales[productId].revenue += item.price * item.quantity;
        });
      });

      return {
        totalSales,
        productSales
      };
    } catch (error) {
      throw new Error('Error generating sales report: ' + error.message);
    }
  }
}

module.exports = new ReportGenerator();
