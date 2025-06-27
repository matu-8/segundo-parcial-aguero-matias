import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = 3000;
// middlewares
app.use('/')
// Servidor en linea
app.listen(PORT, () => { 
    console.log("Servidor inicializado en http://localhost:3000")
});