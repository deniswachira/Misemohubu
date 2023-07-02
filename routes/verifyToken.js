const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).json("You are not authenticated!");
  } else {
    jwt.verify(token, process.env.JWT_SECRET, (err, admin) => {
      if (err) { res.status(403).json(`Token is not valid! : ${err}`); } else {
        req.admin = admin;
        next();
      }
    })
  }
};



module.exports = {
  verifyToken,
};
