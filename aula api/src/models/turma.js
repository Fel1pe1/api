const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sala: { type: mongoose.Schema.Types.ObjectId, ref: 'Sala' },
});

module.exports = mongoose.model('Turma', TurmaSchema);
