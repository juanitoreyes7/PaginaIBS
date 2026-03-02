// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const sicasRoutes = require('./routes/sicas.routes.js'); 
app.use('/api', sicasRoutes);


app.get('/test-ws', async (_, res) => {
  try {
    const head = await axios.head(process.env.SICAS_URL);
    return res.json({ ok: true, status: head.status });
  } catch (e) {
    return res.status(500).json({ ok: false, error: e.message });
  }
});


// Ruta de saludo o “ping”
app.get('/', (req, res) => res.send('OK'));

// Solo UNA llamada a listen, usando el PORT de Cloud Run
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
});
