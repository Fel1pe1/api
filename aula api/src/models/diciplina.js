const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
