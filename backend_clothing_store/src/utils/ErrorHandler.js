const ErrorHandler = (error, req, res) => {
  res.status(500).json({ error: error.message });
}

module.exports = ErrorHandler;