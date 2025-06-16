import "../config/env.config.js";
import jwt from "jsonwebtoken";

function authToken(req, res, next) {
  const tokenFromHeader = req.headers["authorization"]?.split(" ")[1];
  const tokenFromCookie = req.cookies?.token;
  const token = tokenFromHeader || tokenFromCookie;

  if (!token) return res.status(401).json({ message: "Token not found." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
}

export default authToken;
