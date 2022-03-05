const express = require("express");

const db = require("./db")
const app = express();
const Repas = require('./models/repasModel')
app.use(express.json());

const repasRoute = require('./routes/repasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/api/repas/', repasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/', ordersRoute)
app.get("/", (req, res) => {
    res.send("Server working");
});


const port = process.env.PORT || 5000;
app.listen(port, () => 'Server running');


