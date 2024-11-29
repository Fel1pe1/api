const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  turma: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma' },
});

module.exports = mongoose.model('Aluno', AlunoSchema);
