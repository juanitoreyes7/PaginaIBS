// test.js
const { getPolizasVigentes } = require('./services/sicasService');
(async () => {
  try {
    const respuesta = await getPolizasVigentes('REGD-730929-N57');
    console.log('RAW →', JSON.stringify(respuesta, null, 2));
  } catch (e) {
    console.error('ERROR →', e);
  }
})();