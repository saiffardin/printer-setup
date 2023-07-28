const {getPrinters} = require('pdf-to-printer');
// import { getPrinters } from "pdf-to-printer";

getPrinters()
  .then(() => console.log('printer found'))
  .catch(() => console.log('no printer'));