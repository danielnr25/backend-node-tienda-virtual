const User = require('../models/userModel');
const bcrypt = require('bcryptjs');


module.exports.login = async (req,res) =>{
    const {username,password} = req.body;

    try {
        const results = await User.findByUsername(username);
        if(results.length>0){
            const user = results[0];
            const isMatch = await bcrypt.compare(password,user.password);   
      
            if(isMatch){
                return res.status(200).json({message: "Usuario autenticado con éxito"})
            }
        }else{
            return res.status(401).json({message: "Usuario o contraseña incorrecta"})
        }

    } catch (error) {
        console.error("Error inesperado:",error);
        return res.status(500).json({message:"Error interno del servidor, comuniquese con el administrador del sistema."});
    }


}




