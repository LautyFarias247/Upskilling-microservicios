const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { _id, title, director } = req.body;

  if (_id && title && director) return next();
	
  else throw new ClientError("Faltan datos de la película", 401);
};
