const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer','');
    if(!token){
        return res.status(401).json({message:'Acceso denegado'});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(400).json({message: 'Token no válido'})
    }
}


module.exports = authenticate