const { Router } = require('express');
const {   getRoles, addRoles,
    getAplicaciones, addAplicaciones } = require('../controllers/rol-app');



//
//path api/rolapp
//
const router = Router();



router.get('/rol' , getRoles );
router.post('/rol/add' , addRoles );
router.get('/appl' , getAplicaciones );
router.post('/appl/add' , addAplicaciones );




module.exports = router;