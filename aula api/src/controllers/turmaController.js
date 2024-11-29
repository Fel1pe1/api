const Turma = require('../models/turma');

const getAllTurmas = async (req, res) => {
  try {
    const turmas = await Turma.find().populate('sala');
    res.json(turmas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar turmas.' });
  }
};

const createTurma = async (req, res) => {
  try {
    const turma = new Turma(req.body);
    await turma.save();
    res.status(201).json(turma);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar turma.' });
  }
};

module.exports = { getAllTurmas, createTurma };
