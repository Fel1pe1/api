const express = require('express');
const { getAllAlunos, createAluno } = require('../controllers/alunoController');

const router = express.Router();

router.get('/', getAllAlunos);
router.post('/', createAluno);

module.exports = router;
