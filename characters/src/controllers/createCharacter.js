const { response } = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
  const { data } = await axios.post("http://database:8004/Character", req.body);

  response(res, 201, data);
};
