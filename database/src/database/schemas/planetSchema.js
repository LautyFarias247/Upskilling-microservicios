const { Schema } = require("mongoose");

const planetSchema = new Schema({
  _id: String,
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: Number,
  gravity: String,
  terrain: String,
  surface_water: Number,
  residents: [{ type: String, ref: "Character" }],
  films: [{ type: String, ref: "Film" }],
});


planetSchema.statics.list = async function () {
  return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.get = async function (_id) {
  return await this.findById(_id)
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

planetSchema.statics.insert = async function (planet) {
  return await this.create(planet)
};

module.exports = planetSchema