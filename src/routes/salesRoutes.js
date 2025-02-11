const express = require("express");
const router = express.Router();
const salesController = require("../controllers/salesController");

// Definimos las rutas para las ventas
router.get("/sales", salesController.getSales);

module.exports = router;
