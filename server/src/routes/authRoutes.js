const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const validate = require("../middleware/validate");
// const { authLimiter } = require("../middleware/rateLimiter");
const {
  loginValidator,
  registerValidator,
  refreshTokenValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} = require("../validators/authValidator");

router.post("/login", /* authLimiter, */ loginValidator, validate, authController.login);
router.post("/refresh", refreshTokenValidator, validate, authController.refreshToken);
router.post("/logout", auth, authController.logout);
router.post("/forgot-password", forgotPasswordValidator, validate, authController.forgotPassword);
router.post("/reset-password/:token", resetPasswordValidator, validate, authController.resetPassword);
router.get("/me", auth, authController.getMe);

module.exports = router;

