const express = require('express');
const { getAllProfessores, createProfessor } = require('../controllers/professorController');

const router = express.Router();


router.get('/', getAllProfessores);
router.post('/', createProfessor);

module.exports = router;
