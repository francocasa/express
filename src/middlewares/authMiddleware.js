module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Acceso denegado" });
  }
  // Validar el token (esto es un ejemplo simple)
  if (token === "mi-token-secreto") {
    next(); // Continúa con la solicitud
  } else {
    res.status(401).json({ message: "Token no válido" });
  }
};
