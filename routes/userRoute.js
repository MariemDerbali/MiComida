const express = require('express');
const router = express.Router();
const User = require('../models/userModel')

router.post("/register", async (req, res) => {

    const { nom, email, mdp } = req.body
    const newUser = new User({ nom, email, mdp })
    try {
        newUser.save()
        res.send('Utilisateur crée avec succès ')
    } catch (error) {
        return res.status(400).json({ message: error });

    }


});

router.post("/login", async (req, res) => {

    const { email, mdp } = req.body
    try {

        const user = await User.find({ email, mdp })

        if (user.length > 0) {
            const currentUser = {
                nom: user[0].nom,
                email: user[0].email,
                RoleAdmin: user[0].RoleAdmin,
                _id: user[0]._id
            }
            res.send(currentUser);
        } else {
            return res.status(404).json({ message: 'La connexion a échoué' })
        }
    }
    catch (error) {
        return res.status(404).json({ message: 'Something went wrong' })

    }
})

router.get("/getallusers", async (req, res) => {
    try {

        const users = await User.find({})
        res.send(users)

    } catch (error) {
        return res.status(404).json({ message: 'Something went wrong' })
    }
});

router.post("/deleteuser", async (req, res) => {

    const userid = req.body.userid
    try {

        await User.findByIdAndDelete({ _id: userid })
        res.send("Utilisateur supprimé avec succès")
    } catch (error) {
        return res.status(404).json({ message: 'Something went wrong' })

    }
})

module.exports = router;
