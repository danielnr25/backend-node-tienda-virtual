const db = require('../config/db');

const Category = {
    getAll: async () => { // obtener todas las categorias
        try {
            const [results] = await db.query("SELECT id,nombre,descripcion FROM `categorias_productos` WHERE deleted_at IS NULL");
            return results;
        } catch (error) {
            throw error; // si hay un error lo lanzamos y verificamos
        }
    },

    findById: async(id) => { // obtener una categoria por su ID
        try {
            const [results] = await db.query("SELECT id,nombre,descripcion FROM `categorias_productos` WHERE id = ? AND deleted_at IS NULL",[id]);
            return results;
        } catch (error) {
            throw error; 
        }
    },

    create:async (name,description) => {
        try {
            const [results] = await db.query("INSERT INTO categorias_productos (nombre, descripcion, created_at, updated_at) VALUES (?, ?, NOW(), NOW())", [name, description]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    update:async(id,name,description) =>{
        try {
            const [results] = await db.query("UPDATE categorias_productos SET nombre = ?, descripcion = ?, updated_at = NOW() WHERE id = ?", [name, description,id]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    delete:async(id)=>{
        try {
            const [results] = await db.query("UPDATE categorias_productos SET deleted_at = NOW() WHERE id = ?", [id]);
            return results;
        } catch (error) {
            throw error;
        }
    },
    search:async(name)=>{
        try {
            const [results] = await db.query("SELECT id,nombre,descripcion FROM `categorias_productos` WHERE nombre LIKE ? AND deleted_at IS NULL",[`%${name}%`]);
            return results;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = Category;