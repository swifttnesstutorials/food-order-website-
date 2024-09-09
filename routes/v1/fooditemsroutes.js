const express=require("express");
const router=express.Router();
const { getAllFoodItems, getFoodItemById, createFoodItem, updateFoodItem, deleteFoodItem, searchFoodItems } = require('../../controllers/fooditemscontrollers.js');
const { userauth } = require("../../controllers/usercontrollers.js");
const{adminauth}=require("../../middlewares/adminauth.js")
router.get('/allfood', getAllFoodItems);


router.get('/foodbyid:id', getFoodItemById);


router.post('/createfood', adminauth,createFoodItem);


router.put('/update:id',adminauth, updateFoodItem);


router.delete('/delete:id',adminauth, deleteFoodItem);


router.get('/search', searchFoodItems);













module.exports={fooditemsroutes:router};