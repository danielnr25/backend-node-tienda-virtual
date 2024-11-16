const bcrypt = require('bcryptjs');

const password = '12345678';
const salRounds = 12;

bcrypt.hash(password,salRounds,(err, hash)=>{
    if(err){
        console.log('Error al generar el hash',err);
        return;
    }
    console.log('Hash generado:',hash);
})