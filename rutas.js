const {Router} = require ('express');
const router = Router();
const obtenerMorrControlla = require('./controladorUser');
const crearMorrControll = require('./controladorUser');
router.get('/UserMorr', obtenerMorrControlla);
router.post('/crear', crearMorrControll);
module.exports = router;