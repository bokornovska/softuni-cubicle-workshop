const cubeControler = require('./controlers/cubeControler');

// const express = require('express');
// const Router = express.Router;
// const router = Router();

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('index')
});

router.get('/about', (req,res) => {
    res.render('about')
});

// app.get('/create', (req,res) => {
//     res.render('create')
// });

router.get('./create', cubeControler.getCreateCube)

module.exports = router;