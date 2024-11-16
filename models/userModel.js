const database = require('../config/db');

const User = {
    findByUsername: async (username) =>{
        try {
            const [results] = await database.query("SELECT * FROM `usuarios` WHERE username = ?",[username]);
            return results;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = User;