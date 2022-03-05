const mongoose = require("mongoose");


const CommandeSchema = mongoose.Schema({

    nom: { type: String, require },
    email: { type: String, require },
    userid: { type: String, require },
    commandeItems: [],
    shippingAddress: { type: Object },
    montantCommande: { type: Number, require },
    etatCommande: { type: Boolean, require, default: false },
    transactionId: { type: String, require }

}, {
    timestamps: true,
})

module.exports = mongoose.model('commandes', CommandeSchema)