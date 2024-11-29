const express = require('express');
const { getAllTurmas, createTurma } = require('../controllers/turmaController');

const router = express.Router();

router.get('/', getAllTurmas);
router.post('/', createTurma);

module.exports = router;
