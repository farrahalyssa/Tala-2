

const allowedOrigins = [
  "https://tala-app.netlify.app",
  "http://localhost:5173"
];
// const origin = req.headers.origin;
// if (allowedOrigins.includes(origin)) {
//   res.setHeader("Access-Control-Allow-Origin", origin);
// }

const accessControlAllow = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", 'https://localhost:5173/');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET, DELETE, PUT, OPTIONS");
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
