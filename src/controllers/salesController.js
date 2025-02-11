const Sale = require("../models/sale"); // Importamos el modelo de datos

// Controlador para obtener todas las ventas
exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find();

    // Filtrar y devolver los campos que te interesen
    const filteredSales = sales.map((sale) => ({
      invoiceId: sale["Invoice ID"],
      Gender: sale.Gender,
      Branch: sale.Branch,
    }));

    res.status(200).json(filteredSales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
