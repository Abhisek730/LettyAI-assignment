const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");


// to add user
router.post("/add", (req, res) => {
    const name = req.body.name
    const age = req.body.age

    if (!name || !age) {
        return res.status(422).json({ error: "Please add all the fields" })
    }

    const new_user = new User({
        Name: name,
        Age: age
    })

    new_user.save()
        .then(user => { res.json({ message: "Registered successfully" }) })
        .catch(err => { console.log(err) })
    console.log(new_user)
})

// to get user 
router.get("/getUsers", (req, res) => {
    User.find()
        .then(data => { res.json(data) })
})


// Question 4 : to get user with id

router.get("/findUser/:id", (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => {
            res.json(user)
            console.log(user)
        })
})





module.exports = router