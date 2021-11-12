const User = require('../models/user');
const Rol = require('../models/rol');

const emailExists = async (email = '') => {
    let user = await User.findOne({ email });
    if(user){
        throw new Error(`El correo ${email} ya existe`);
    }
}

const rolExists = async (_rol = '') => {
    let rol = await Rol.findOne({ rol: _rol });
    if(!rol){
        throw new Error(`El correo ${ _rol } ya existe`);
    }
}

const userByIdExists = async (id = '') => {
    let user = await User.findById(id);
    if(!user){
        throw new Error(`El id ${ id } no existe en la plataforma`);
    }
}

module.exports = {
    emailExists,
    rolExists,
    userByIdExists
}