const controller = require('./controllers');
const router = require('express').Router();

router.get('/api/getVets', controller.getVets.get);

router.post('/api/deleteVet', controller.deleteVet.post);

router.post('/api/addVet', controller.addVet.post);


module.exports = router;