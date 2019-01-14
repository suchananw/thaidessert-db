const express = require("express");
const router = express.Router();

// Load model
const Dessert = require("../../models/Dessert");

router.get("/test", (req, res) => res.json({ msg: "Desserts Works" }));

router.get("/search/:query", (req, res) => {
  const errors = {};
  const name = req.params.query;
  console.log("search : " + name)
  Dessert.find({ name: new RegExp('^' + name, "i") })
    .then(dessert => {
      if (!dessert) {
        errors.nodessert = "desserts not exists";
        res.status(404).json(errors);
      }
      res.json(dessert);
    })
    .catch(err => res.status(404).json({ dessert: "dessert not exists" }));
});

router.post("/adddessert", (req, res) => {
  const newDessert = new Dessert({
    name: req.body.name,
    img: req.body.img,
    type: req.body.type,
    ingredients: req.body.ingredients
  });

  newDessert
    .save()
    .then(movie => res.json(movie))
    .catch(err => console.log(err));
});

router.post("/update", (req, res) => {
  const errors = {};

  Dessert.findOne({ name: req.body.name })
    .then(dessert => {
      if (!dessert) {
        errors.nodessert = "desserts not exists";
        res.status(404).json(errors);
      }

      dessert[req.body.update] = req.body.data;
      dessert.save();
      res.json(dessert);
    })
    .catch(err => res.status(404).json({ dessert: "dessert not exists" }));
});

// router.post("/addkey", (req, res) => {
//   const errors = {};

//   Dessert.findOne({ name: req.body.name })
//     .then(dessert => {
//       if (!dessert) {
//         errors.nodessert = "desserts not exists";
//         res.status(404).json(errors);
//       }

//       dessert[req.body.update] = req.body.data;
//       dessert.save();
//       res.json(dessert);
//     })
//     .catch(err => res.status(404).json({ dessert: "dessert not exists" }));
// });

module.exports = router;