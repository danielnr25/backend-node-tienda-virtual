const db = require('../config/db');

const Sales = {
    // crear venta
    create: async (product_id, cantidad, precio, total, fecha) => {
        const connection = await db.getConnection(); // Obtener conexión a la base de datos
        try {
            // Iniciar una transacción
            await connection.beginTransaction();

            // Insertar en la tabla de ventas
            const [ventaResult] = await connection.query(
                "INSERT INTO ventas (usuario_id, total, fecha, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())",
                [1, total, fecha] // Asumiendo que el usuario_id es siempre 1
            );

            // Insertar en la tabla de detalle_ventas
            await connection.query(
                "INSERT INTO detalle_ventas (venta_id, producto_id, cantidad, precio_unitario, subtotal, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())",
                [ventaResult.insertId, product_id, cantidad, precio, total] // Usamos el insertId de la venta anterior
            );

            // Confirmar la transacción
            await connection.commit();

            return ventaResult; // Devolver el resultado de la venta
        } catch (error) {
            // Si hay un error, revertir la transacción
            await connection.rollback();
            throw error;
        }
    }
}