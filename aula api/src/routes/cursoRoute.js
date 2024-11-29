const express = require('express');
const { getAllCursos, createCurso } = require('../controllers/cursoController');

const router = express.Router();


router.get('/', getAllCursos);
router.post('/', createCurso);

module.exports = router;
