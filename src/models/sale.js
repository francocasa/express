const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
  {
    "Invoice ID": String, // Campo con espacio
    Gender: String,
    Branch: String,
  },
  {
    toJSON: {
      transform: (doc, ret) => {
        ret.invoiceId = ret["Invoice ID"]; // Renombramos el campo "Invoice ID" a "invoiceId"
        delete ret["Invoice ID"]; // Eliminamos el campo original
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("Sale", saleSchema);
