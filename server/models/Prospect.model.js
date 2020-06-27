const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProspectSchema = new Schema({
  firstname: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  club: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Prospect", ProspectSchema);
