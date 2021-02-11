// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome to REST!',
    });
});
// Import meme controller
var memesController = require('./memesController');
// meme routes
router.route('/memes')
    .get(memesController.index)
    .post(memesController.new);
router.route('/memes/:meme_id')
    .get(memesController.view)
    .patch(memesController.update)
    .put(memesController.update)
    .delete(memesController.delete);
// Export API routes
module.exports = router;

