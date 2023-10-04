const axios = require("axios")
const { response } = require("../utils");

module.exports = async (req, res) => {
  const { data } = await axios.post("http://database:8004/Film", req.body);

	response(res,201,data)
};
