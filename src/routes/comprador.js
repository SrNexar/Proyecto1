const express = require('express');
const router = express.Router();


 const compradorcontroller = require('../controllers/compradorcontroller');

router.get('/', compradorcontroller.list);

router.post('/add', compradorcontroller.save);
router.get('/delete/:id',compradorcontroller.delete);
router.get('/update/:id',compradorcontroller.edit);
router.post('/update/:id',compradorcontroller.update);
    

module.exports = router;


