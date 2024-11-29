const Curso = require('../models/curso');

const getAllCursos = async (req, res) => {
  try {
    const cursos = await Curso.find().populate('disciplinas');
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cursos.' });
  }
};

const createCurso = async (req, res) => {
  try {
    const curso = new Curso(req.body);
    await curso.save();
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar curso.' });
  }
};

module.exports = { getAllCursos, createCurso };
