const router = require('express').Router();

const cubeControler = require('./controlers/cubeControler');
const homeControler = require('./controlers/homeControler');
const accessoryControler = require('./controlers/accessotyControler');


router.get('/', homeControler.getHomePage);
router.get('/about', homeControler.getAboutPage);
router.get('/404', homeControler.getErrorPage)


router.get('/cubes/create', cubeControler.getCreateCube)
router.post('/cubes/create', cubeControler.postCreateCube);
router.get('/cubes/:cubeId/details', cubeControler.getDetails);

router.get('/cubes/:cubeId/attach', cubeControler.getattachAccessory);
router.post('/cubes/:cubeId/attach', cubeControler.postAttachAccessory);


router.use('/accessories', accessoryControler);



module.exports = router;