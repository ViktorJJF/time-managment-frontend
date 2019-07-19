const express = require('express');
const router = express.Router();

//Controllers
const goal_controller = require('../../controllers/wimHofController')

//wimHof API endPpoints
router.get('/wimhof', goal_controller.wimHof_list);
router.post('/wimhof', goal_controller.wimHof_create);
// router.put('/wimhof/:id', goal_controller.goal_update);
// router.delete('/wimhof/:id', goal_controller.goal_delete);

module.exports = router;