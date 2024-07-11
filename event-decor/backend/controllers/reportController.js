const { generateSalesReport } = require('../models/ReportGenerator');

async function generateReportHandler(req, res) {
    try {
        const report = await generateSalesReport();
        res.status(200).json(report);
    } catch (err) {
        res.status(500).json({ error: 'Error generating sales report' });
    }
}

module.exports = {
    generateReportHandler,
};
