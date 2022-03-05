const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const stripe = require("stripe")("sk_test_51K3gAvF6sn1puc9iwGKGsNvPyDlYqZEhXYILW0zsyBcEdLhBm3sz8c5zNQ0ZB59jWYgir2xIYUv2oroRSk4ZBhsS0025zGBmlo")
const Commande = require('../models/orderModel')

router.post("/placeorder", async (req, res) => {

    const { token, subtotal, currentUser, cartItems } = req.body

    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: Math.round((subtotal * 100) / 3.25),
            currency: 'EUR',
            customer: customer.id,
            receipt_email: token.email

        }, {
            idempotencyKey: uuidv4()
        })
        if (payment) {


            const neworder = new Commande({
                nom: currentUser.nom,
                email: currentUser.email,
                userid: currentUser._id,
                commandeItems: cartItems,
                montantCommande: subtotal,
                shippingAddress: {
                    street: token.card.address_line1,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    pincode: token.card.address_zip
                },
                transactionId: payment.source.id

            })

            neworder.save()
            res.send('Paiement Réussi')
        }
        else {
            res.send('Paiement A Échoué ')
        }

    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' + error });

    }
});

router.post("/getuserorders", async (req, res) => {
    const { userid } = req.body
    try {
        const orders = await Commande.find({ userid: userid }).sort({ _id: -1 })
        res.send(orders)

    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' });

    }
})

router.get("/getallorders", async (req, res) => {

    try {
        const orders = await Commande.find({})
        res.send(orders)
    } catch (error) {
        return res.status(400).json({ message: error });

    }
});

router.post("/deliverorder", async (req, res) => {
    const orderid = req.body.orderid
    try {
        const order = await Commande.findOne({ _id: orderid })
        order.etatCommande = true
        await order.save()
        res.send('Commande livrée avec succès')
    } catch (error) {
        return res.status(400).json({ message: error });
    }
})

module.exports = router