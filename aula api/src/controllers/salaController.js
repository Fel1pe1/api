const Sala = require('../models/sala');

const getAllSalas = async (req, res) => {
  try {
    const salas = await Sala.find();
    res.json(salas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar salas.' });
  }
};

const createSala = async (req, res) => {
  try {
    const sala = new Sala(req.body);
    await sala.save();
    res.status(201).json(sala);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar sala.' });
  }
};

module.exports = { getAllSalas, createSala };
