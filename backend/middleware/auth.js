const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({
      msg: "No token found! Authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, jwtsecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({
      msg: "Token is not valid",
    });
  }
};
