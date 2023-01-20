const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Age: {
            type: String,
            required: true
        }
    }
)

mongoose.model('User', userSchema)
