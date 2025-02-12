const authorize = (req, res, next) => {
  if (req.headers.authorization !== process.env.PASSWORD)
    return res.sendStatus(401);
  next();
};

module.exports = authorize;
