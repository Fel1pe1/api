const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Importando rotas
const alunoRoutes = require('./routes/alunoRoute');
const professorRoutes = require('./routes/professorRoute');
const cursoRoutes = require('./routes/cursoRoute');
const disciplinaRoutes = require('./routes/disciplinaRoute');
const turmaRoutes = require('./routes/turmaRoute');
const salaRoutes = require('./routes/salaRoute');

// Configurando rotas
app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/disciplinas', disciplinaRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/salas', salaRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
