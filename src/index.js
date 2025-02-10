const express = require("express");
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Ruta básica
app.get("/", (req, res) => {
  res.send("¡Hola, Mundo!");
});

// Ruta para obtener datos
app.get("/api/data", (req, res) => {
  const data = { message: "Este es un backend con Express" };
  res.json(data);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
