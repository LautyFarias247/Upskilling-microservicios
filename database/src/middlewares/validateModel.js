module.exports = (req, res, next) => {
  const { model } = req.params;
  const validModels = ["Character", "Film", "Planet"];
  if (validModels.includes(model)) return next();
	else return res.status(404).send("Invalid model")
};
