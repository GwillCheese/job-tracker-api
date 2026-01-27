module.exports = (err, req, res, next) => {
  console.error(err);

  if (err.code === "P2002") {
    return res.status(409).json({ message: "User already exists" });
  }

  const status = err.statusCode || 500;

  res.status(status).json({
    message: status === 500 ? "Internal server error" : err.message,
  });
};
