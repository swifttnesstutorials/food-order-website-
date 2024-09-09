const express = require("express");
const { userauth } = require("../../middlewares/userauth.js");
const { addToCart, removeFromCart, getCart, updateCart } = require("../../controllers/cartcontrollers.js");

const router = express.Router();

router.post("/add-to-cart", userauth, addToCart);
router.delete("/remove", userauth, removeFromCart);
router.get("/getCart", userauth, getCart);
router.put('/update',updateCart)

module.exports = { cartRouter: router };