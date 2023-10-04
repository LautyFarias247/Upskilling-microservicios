const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, name, birth_year, gender } = req.body;

  if (_id && name && birth_year && gender) return next();
  
	else throw new ClientError("Faltan datos del personaje", 401);
};
