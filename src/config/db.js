// src/config/db.js
const mongoose = require("mongoose");

// Esta es la función que se encarga de conectar a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error de conexión a MongoDB:", err);
    process.exit(1); // Termina el proceso si no se puede conectar
  }
};

module.exports = connectDB;
