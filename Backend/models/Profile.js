const mongoose = require("mongoose");

const Profile = mongoose.Schema({
  Image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Profiles", Profile);
