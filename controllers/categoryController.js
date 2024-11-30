const Category = require("../models/categoryModel");

const CategoryController = {

    getAllCategories: async(req,res) =>{ // obtener todas las categorias
        try {
            const categories = await Category.getAll(); // Llamamos al modelo para obtener todas las categorias
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({message:'Error al obtener las categorias',error})
        }
    },
}


module.exports = CategoryController