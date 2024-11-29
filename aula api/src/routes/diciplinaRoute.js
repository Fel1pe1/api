const express = require('express');
const { getAllDisciplinas, createDisciplina } = require('../controllers/disciplinaController');

const router = express.Router();


router.get('/', getAllDisciplinas);
router.post('/', createDisciplina);

module.exports = router;
