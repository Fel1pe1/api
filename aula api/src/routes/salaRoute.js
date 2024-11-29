const express = require('express');
const { getAllSalas, createSala } = require('../controllers/salaController');

const router = express.Router();


router.get('/', getAllSalas);
router.post('/', createSala);

module.exports = router;
