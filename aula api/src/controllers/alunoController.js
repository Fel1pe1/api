const Aluno = require('../models/aluno');

const getAllAlunos = async (req, res) => {
  try {
    const alunos = await Aluno.find().populate('turma');
    res.json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar alunos.' });
  }
};

const createAluno = async (req, res) => {
  try {
    const aluno = new Aluno(req.body);
    await aluno.save();
    res.status(201).json(aluno);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar aluno.' });
  }
};

module.exports = { getAllAlunos, createAluno };
