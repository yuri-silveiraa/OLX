const express = require('express');
const router = express.router();

const AuthController = require('./controllers/AuthController' );
const AdsController = require('./controllers/AdsController');
const UserController = require('./controllers/UserController');


router.get('/', (req, res) => {
    res.send('Hello World!');
});

router.get('/states', UserController.getStates);

router.post('/user/signin', AuthController.signin);
router.post('/user/signup', AuthController.signup);

router.get('/user/me', UserController.info);
router.put('/user/me', UserController.editAction);

router.get('/categories', AdsController.getCategories);

router.post('/ad/add', AdsController.addAction);
router.get('/ad/list', AdsController.getList);
router.get('/ad/item', AdsController.getItem);
router.put('/ad/:id', AdsController.editAction);


module.exports = router;