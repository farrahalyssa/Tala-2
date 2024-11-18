

const FRONTEND_URL = 'https://tala-app.netlify.app' || 'http://localhost:5173';

if (!FRONTEND_URL) {
  throw new Error("FRONTEND_URL value is not defined in .env file");
}

const accessControlAllow = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", 'https://tala-app.netlify.app');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
};

module.exports = accessControlAllow;
