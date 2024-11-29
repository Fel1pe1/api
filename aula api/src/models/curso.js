const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  disciplinas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina' }],
});

module.exports = mongoose.model('Curso', CursoSchema);
