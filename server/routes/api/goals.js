const express = require('express');
const router = express.Router();

//Controllers
const goal_controller = require('../../controllers/goalController.js')

//Goals routes
router.get('/goals', goal_controller.goal_list);
router.post('/goals', goal_controller.goal_create);
router.put('/goal/:id', goal_controller.goal_update);
router.delete('/goal/:id', goal_controller.goal_delete);

module.exports = router;