const ReportGenerator = require('../models/ReportGenerator');

exports.getSalesReport = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    const report = await ReportGenerator.generateSalesReport(startDate, endDate);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
