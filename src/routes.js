const router = require('express').Router();

const cubeControler = require('./controlers/cubeControler');
const homeControler = require('./controlers/homeControler');
// const express = require('express');
// const Router = express.Router;
// const router = Router();



router.get('/', homeControler.getHomePage);
router.get('/about', homeControler.getAboutPage);
router.get('/404', homeControler.getErrorPage)

router.post('/create', cubeControler.postCreateCube);
router.get('/details/cubeId', cubeControler.getDetails);

// app.get('/create', (req,res) => {
//     res.render('create')
// });

router.get('/create', cubeControler.getCreateCube)

module.exports = router;