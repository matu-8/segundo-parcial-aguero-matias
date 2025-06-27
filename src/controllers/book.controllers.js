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
        const books = await getBookById.findByPk({message:"Libro encontrado"});
            // {id} = {req.params.id}
    } catch (error) { res.status(500).json({err: error, message});  
        }    
    };
export const updBook = async (req, body) => {

}