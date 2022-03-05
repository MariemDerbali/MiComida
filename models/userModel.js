const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    nom: { type: String, require },
    email: { type: String, require },
    mdp: { type: String, require },
    RoleAdmin: { type: Boolean, require, default: false }

}, {
    timestamps: true,
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel