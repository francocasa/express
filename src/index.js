// const express = require("express");
// const app = express();
// const port = 9090;

// // Middleware para manejar JSON
// app.use(express.json());

// // Ruta básica
// app.get("/", (req, res) => {
//   res.send("¡Hola, Mundo!");
// });

// // Ruta para obtener datos
// app.get("/api/data", (req, res) => {
//   const data = { message: "Este es un backend con Express" };
//   res.json(data);
// });

// // Iniciar servidor
// app.listen(port, () => {
//   console.log(`Servidor corriendo en http://localhost:${port}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 9090;

// Conectar a MongoDB
mongoose
  .connect("mongodb://localhost:27017/supermarketSales", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error);
  });

// Definir un esquema de Mongoose para los datos de ventas del supermercado
const salesSchema = new mongoose.Schema({
  invoice_id: String,
  branch: String,
  city: String,
  customer_type: String,
  gender: String,
  product_line: String,
  unit_price: Number,
  quantity: Number,
  total: Number,
  date: Date,
  time: String,
  payment: String,
  cogs: Number,
  gross_income: Number,
  net_income: Number,
});

const Sales = mongoose.model("Sales", salesSchema);

// Ruta para obtener todos los registros de ventas
app.get("/api/sales", async (req, res) => {
  try {
    const salesData = await Sales.find();
    res.json(salesData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener los datos de ventas" });
  }
});

// Iniciar el servidor Express
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
