module.exports = function (req, res, next) {
  console.log("Admin Middleware - req.user:", req.user);

  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied: Admins only" });
  }
};
