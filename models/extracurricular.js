const mongoose = require("mongoose");

const ExtracurricularSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  coach: {
    type: String,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  quota: {
    type: Number,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("extracurricular", ExtracurricularSchema);
