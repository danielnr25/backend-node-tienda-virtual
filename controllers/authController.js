const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.login = async (req,res) =>{ //req:request recibe la petición del cliente, res:response envía la respuesta al cliente
    const {username,password} = req.body;

    try {
        const results = await User.findByUsername(username);
        if(results.length>0){
            const user = results[0]; // id: 1, username: 'admin', password: 'admin'
            const isMatch = await bcrypt.compare(password,user.password);   
      
            if(isMatch){
                const token = jwt.sign({userId:user.id,role:user.tipo_usuario_id},process.env.JWT_SECRET,{expiresIn:'24h'});
                return res.status(200).json({message: "Usuario autenticado con éxito",token});
            }else{
                return res.status(401).json({message: "Usuario o contraseña incorrecta"})
            }
        }else{
            return res.status(401).json({message: "Usuario o contraseña incorrecta"})
        }
    } catch (error) {
        console.error("Error inesperado:",error);
        return res.status(500).json({message:"Error interno del servidor, comuniquese con el administrador del sistema."});
    }


}




