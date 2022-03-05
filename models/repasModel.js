const mongoose = require("mongoose");


const repasSchema = mongoose.Schema({
    nom: { type: String, require },
    Lesprix: [],
    categorie: { type: String, require },
    image: { type: String, require },
    description: { type: String, require }

}, {
    timestamps: true,
})

const repasModel = mongoose.model('repas', repasSchema)

module.exports = repasModel