const express = require("express");
const router = express.Router();
const vehicle=require('../models/vehicles')
const veryfyTocken=require('../middleware/authMiddleware')


router.get("/vehicle", veryfyTocken,async (req, res) => {
  const details = await vehicle.find({});
  res.json(details);
});

router.post("/add-vehicle",veryfyTocken, async (req, res) => {
    try {
      const data = req.body;
      const result =await vehicle.create(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(500).json();
    }
  });

  

  module.exports=router
