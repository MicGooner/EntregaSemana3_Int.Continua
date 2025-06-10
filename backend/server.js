const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Conexión a MongoDB
mongoose.connect('mongodb://mongo:27017/miapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Conectado con el Poli');
})
.catch(err => {
  console.error('❌ Error al conectar con MongoDB', err);
});

// Ruta para API
app.get('/api/status', (req, res) => {
  res.send('✅ Conectado con el Poli');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
