const express = require("express");
const authcontroller = require("../controllers/auth-controller");
const { signupSchema, loginSchema } = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");
const authMiddleware = require("../middlewares/auth-middleware")
const router = express.Router();

router.route("/").get(authcontroller.home)

router.route("/about").post(validate(signupSchema), authcontroller.about)
router.route("/login").post(validate(loginSchema), authcontroller.login)
router.route("/user").get(authMiddleware, authcontroller.user);
module.exports = router;  