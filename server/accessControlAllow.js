const accessControlAllow = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173.app"); 
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.status(204).end(); // Return no content for preflight requests
  }

  next();
};

module.exports = accessControlAllow;
