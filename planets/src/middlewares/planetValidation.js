const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, name, climate } = req.body;

  if (_id && name && climate) return next();
  else throw new ClientError("Faltan datos del planeta", 401);
};
