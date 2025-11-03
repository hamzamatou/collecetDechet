const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret-test';


function authenticate(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/login');
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; 
    next();
  } catch (err) {
    console.error("Token invalide :", err.message);
    res.clearCookie('token');
    return res.redirect('/login');
  }
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== role) {
      return res.status(403).send("Accès refusé");
    }
    next();
  };
}

module.exports = { authenticate, authorizeRole };
