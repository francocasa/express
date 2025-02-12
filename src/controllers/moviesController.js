const MoviesModel = require("../models/movies"); // Importamos el modelo de datos

// Controlador para obtener todas las ventas
exports.getMovies = async (req, res) => {
  try {
    const movies = await MoviesModel.find();
    // Filtrar y devolver los campos que te interesen
    const filteredSales = movies.map((movie) => ({
      title: movie.title,
      year: movie.year,
      languages: movie.languages,
    }));
    console.log(filteredSales);

    res.status(200).json(filteredSales);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
