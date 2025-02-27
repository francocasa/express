const express = require("express");
require("dotenv").config();
const moviesRoutes = require("./routes/moviesRoutes");
const cors = require("cors"); // Si usas CORS
const connectDB = require("./config/db"); // Importar la función de conexión

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Conectar a la base de datos
connectDB();

// Rutas
app.use("/api", moviesRoutes);

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
