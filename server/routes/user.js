const route = require("express").Router();
const User = require("../models/User");

route.post("/", (req, res) => {
  let user = req.body.user;
  // Validate user
  let newUser = new User();
  newUser.firstName = user.firstName;
  newUser.lastName = user.lastName;
  newUser.save().then(() => res.status(204).send());
});

route.get("/", (req, res) => {
  let id = req.body.userId;
  if (id) {
    User.findById(id)
      .then(user => res.status(200).json(user))
      .catch(err => res.status(400).json({ error: err }));
  } else {
    res.status(400).json({ error: "You must provide a user ID" });
  }
});

route.get("/all", (req, res) => {
  User.find()
    .then(users => res.status(200).json(users))
    .catch(err => res.status(404).json({ error: err }));
});

route.put("/", (req, res) => {
  let userToUpdate = req.body.user;
  // Validate
  User.findByIdAndUpdate({ id: userToUpdate.id }, userToUpdate)
    .then(() => res.status(204).send())
    .catch(err => res.status(400).json({ error: err }));
});

route.delete("/", (req, res) => {
  let id = req.body.id;
  User.findByIdAndDelete(id)
    .then(() => res.status(204).send())
    .catch(err => res.status(400).json({ error: err }));
});

module.exports = route;

const isEmpty = data =>
  data === null ||
  data === undefined ||
  (data instanceof Array && data.length <= 0);
