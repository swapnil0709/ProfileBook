const express = require("express");
const { renderSync } = require("node-sass");
const Profile = require("../models/Profile");
const router = express.Router();

// Get all profiles
router.get("/", async (req, res) => {
  try {
    const allProfiles = await Profile.find();
    res.json(allProfiles);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a new profile
router.post("/", async (req, res) => {
  console.log(req.body);
  const profile = new Profile({
    Image: req.body.Image,
    name: req.body.name,
    id: req.body.id,
  });
  try {
    const savedProfile = await profile.save();
    res.json(savedProfile);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific profile
router.get("/:profileId", async (req, res) => {
  try {
    const foundProfile = await Profile.findById(req.params.profileId);
    res.json(foundProfile);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a profile
router.delete("/:profileId", async (req, res) => {
  try {
    const removedProfile = await Profile.remove({ _id: req.params.profileId });
    res.json(removedProfile);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a profile
router.patch("/:profileId", async (req, res) => {
  try {
    const updatedProfile = await Profile.updateOne(
      {
        _id: req.params.profileId,
      },
      { $set: { Image: req.body.Image, name: req.body.name, id: req.body.id } }
    );
    res.json(updatedProfile);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
