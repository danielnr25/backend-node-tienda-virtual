const db = require('../config/db');

const Product = {
    getAll: async () => {
        try {
            const [results] = await db.query("SELECT pr.nombre,pr.id,pr.precio,pr.descripcion,pr.imagen,cp.nombre as categorianombre,pr.categoria_id FROM `productos` pr LEFT JOIN categorias_productos cp ON pr.categoria_id = cp.id WHERE pr.deleted_at IS NULL"); // Traemos todos los productos donde deleted_at es NULL
            return results;
        } catch (error) {
            throw error; // Si hay un error lo lanzamos
        }
    },
    findById: async (id) => {
        try {
            const [results] = await db.query("SELECT pr.nombre,pr.id,pr.precio,pr.descripcion,pr.imagen,cp.nombre as categorianombre,pr.categoria_id FROM `productos` pr LEFT JOIN categorias_productos cp ON pr.categoria_id = cp.id WHERE pr.id = ? AND pr.deleted_at IS NULL", [id]); // Traemos el producto por su ID
            return results;
        } catch (error) {
            throw error; // Si hay un error lo lanzamos
        }
    },
    // Crear un nuevo producto
    create: async (name, description, price, category_id, image_url) => {
        try {
            const [results] = await db.query(
                "INSERT INTO productos (nombre,descripcion,precio,categoria_id,imagen, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())",
                [name, description, price, category_id, image_url] // Se almacena la URL de la imagen
            );
            return results; // Retorna los resultados de la inserción
        } catch (error) {
            throw error; // Si hay un error lo lanzamos
        }
    },
    // Actualizar un producto
    update: async (id, name, description, price, category_id, image_url) => {
        try {
            const [results] = await db.query(
                "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria_id = ?,imagen = ?, updated_at = NOW() WHERE id = ?",
                [name, description, price, category_id, image_url, id]
            );
            return results; // Retorna los resultados de la actualización
        } catch (error) {
            throw error; // Si hay un error lo lanzamos
        }
    },
    
    delete: async (id) => {
        try {
            const [results] = await db.query("UPDATE productos SET deleted_at = NOW() WHERE id = ?", [id]);
            return results; // Retorna los resultados de la eliminación
        } catch (error) {
            throw error; // Si hay un error lo lanzamos
        }
    }

}

module.exports = Product;