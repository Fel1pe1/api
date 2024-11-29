const Disciplina = require('../models/Disciplina');

const getAllDisciplinas = async (req, res) => {
  try {
    const disciplinas = await Disciplina.find().populate('professor');
    res.json(disciplinas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas.' });
  }
};

const createDisciplina = async (req, res) => {
  try {
    const disciplina = new Disciplina(req.body);
    await disciplina.save();
    res.status(201).json(disciplina);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar disciplina.' });
  }
};

module.exports = { getAllDisciplinas, createDisciplina };
