import express from 'express';
import { getAllBooks, getBookById, updBook } from '../controllers/book.controllers';
// Creación de rutas
const routerBook = express.Router(); 
     router.get('/api/books:',getAllBooks)
     router.get('api/books:id:',getBookById)
     router.put('/api/books/:id:',)
     router.post('/api/books:',updBook)
     router.delete('/api/books/:id:')

     export default routerBook;
