const express = require("express");
const router = express.Router();

//Controllers
const activityController = require("../../controllers/activityController");

//activities API endPpoints
router.get("/activities", activityController.list);
router.post("/activities", activityController.create);
router.put("/activities/:id", activityController.update);
router.delete("/activities/:id", activityController.deletes);

module.exports = router;
