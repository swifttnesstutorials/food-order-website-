const express = require("express");
const { adminSignup,adminLogout, adminLogin, adminProfile, checkadmin } = require("../../controllers/admincontrollers.js");
const { adminauth } = require("../../middlewares/adminauth.js");
const { checkUser } = require("../../controllers/admincontrollers.js");

const router = express.Router();

router.post("/signup",adminSignup)
router.post("/login", adminLogin);
router.post("/logout", adminLogout);

router.get("/profile:id", adminauth, adminProfile);
router.put("/update");
router.delete("/delete");

router.get("/userList");

 router.get("/check-admin",adminauth,checkadmin );

// router.get("/some-end-point", adminAuth, handleSomething);

module.exports = { adminRouter: router };
