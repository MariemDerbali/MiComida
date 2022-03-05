const express = require('express');
const { models } = require("mongoose");
const router = express.Router();
const Repas = require('../models/repasModel')

router.get("/getallrepas", async (req, res) => {

    try {
        const repas = await Repas.find({})
        res.send(repas)
    } catch (error) {
        return res.status(400).json({ message: error });

    }


});

router.post("/addrepas", async (req, res) => {

    const repas = req.body.repas

    try {
        const newrepas = new Repas({
            nom: repas.nom,
            image: repas.image,
            description: repas.description,
            categorie: repas.categorie,
            Lesprix: repas.Lesprix
        })
        await newrepas.save()
        res.send('Nouveau repas ajouté avec succès')
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});

router.post("/getrepasbyid", async (req, res) => {

    const repasid = req.body.repasid

    try {
        const repas = await Repas.findOne({ _id: repasid })
        res.send(repas)
    } catch (error) {
        return res.status(400).json({ message: error });
    }

});


router.post("/editrepas", async (req, res) => {

    const editedrepas = req.body.editedrepas

    try {


        const repas = await Repas.findOne({ _id: editedrepas._id })
        repas.nom = editedrepas.nom,
            repas.description = editedrepas.description,
            repas.image = editedrepas.image,
            repas.categorie = editedrepas.categorie,
            repas.Lesprix = [editedrepas.Lesprix]

        await repas.save()
        res.send("repas est mis à jour avec succès")

    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.post("/deleterepas", async (req, res) => {
    const repasid = req.body.repasid

    try {
        await Repas.findOneAndDelete({ _id: repasid })
        res.send('Repas supprimé avec succès')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})


module.exports = router;
