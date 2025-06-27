import express from "express";
import sequelize from "../models/book.model";

export const getAllBooks = async (res, res) => {
    try{
        const books = await getAllBooks.findAll(books).json({message:"Libros disponibles"});
        res.status(200).json();

    } catch { res.status(500).json({err: error, message});
        }
};
export const getBookById = async (req, res) => {
    try {
        const books = await books.findByPk({message:"Libro encontrado"});
        {where = req.params.id}
        if(id !== req.params.id) {
            res.status(400).json({message:'Libro no encontrado'});
        }
    } catch (error) { res.status(500).json({err: error, message});  
        }    
    };
export const updBook = async (req, body) => {
    try { 
        const book = await book
    } catch (error) { 
        
    }

}