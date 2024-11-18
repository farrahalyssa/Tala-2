const accessControlAllow = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://tala-app.netlify.app'); 
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
      return res.status(204).end(); // Handle preflight requests
  }

  next();
};

module.exports = accessControlAllow;
