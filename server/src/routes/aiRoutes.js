const express = require("express");
const router = express.Router();
const aiController = require("../controllers/aiController");
const auth = require("../middleware/auth");
const roleGuard = require("../middleware/roleGuard");
const validate = require("../middleware/validate");
// const { aiLimiter } = require("../middleware/rateLimiter");
const {
  generateWorkoutPlanValidator,
  generateDietPlanValidator,
} = require("../validators/planValidator");

router.use(auth);
// router.use(aiLimiter);

router.post(
  "/generate-workout-plan",
  roleGuard("admin", "trainer", "member"),
  generateWorkoutPlanValidator,
  validate,
  aiController.generateWorkoutPlan
);
router.post(
  "/generate-diet-plan",
  roleGuard("admin", "trainer", "member"),
  generateDietPlanValidator,
  validate,
  aiController.generateDietPlan
);
router.post("/request-plan", roleGuard("member"), aiController.requestAIPlan);

module.exports = router;

