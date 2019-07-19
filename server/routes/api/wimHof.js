const express = require('express');
const router = express.Router();

//Controllers
const wimhof_controller = require('../../controllers/wimHofController')

//wimHof API endPpoints
router.get('/wimhof/search', wimhof_controller.wimHof_select);
router.get('/wimhof', wimhof_controller.wimHof_list);
router.post('/wimhof', wimhof_controller.wimHof_create);
router.put('/wimhof/:id', wimhof_controller.wimHof_update);
// router.delete('/wimhof/:id', wimhof_controller.wimhof_delete);

module.exports = router;