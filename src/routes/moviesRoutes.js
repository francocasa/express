const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

// Definimos las rutas para las ventas
router.get("/movies", moviesController.getMovies);

module.exports = router;
