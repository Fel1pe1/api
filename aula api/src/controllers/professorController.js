const Professor = require('../models/professor');

const getAllProfessores = async (req, res) => {
  try {
    const professores = await Professor.find().populate('disciplinas');
    res.json(professores);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professores.' });
  }
};

const createProfessor = async (req, res) => {
  try {
    const professor = new Professor(req.body);
    await professor.save();
    res.status(201).json(professor);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar professor.' });
  }
};

module.exports = { getAllProfessores, createProfessor };
