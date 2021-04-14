const { response } = require('express');
const UsuarioAdmin = require('../models/admin-usuario');





// obtiene todos los usuarsio
const getUsuarios = async ( req, res = response) => {    

    const entidad = await UsuarioAdmin.find();
    res.status(200).json({
        ok : true, msg : 'todo bien', entidad
    });
}


// agrega un ususario
const addUsuarios = async ( req, res = response) => {    
    try {
        
        const entidad = new UsuarioAdmin( req.body );
        console.log(req.body);
        await entidad.save();
        res.status(200).json({
            ok : true, msg : 'todo bien EC', entidad
    
        });
    } catch (error) {
        console.log(error);
    }
}

// modifica un usuario
const updateUsuarios = async ( req, res = response) => {    
    const usuario = new UsuarioAdmin( req.body );

    const rs = await UsuarioAdmin.findOneAndUpdate( { id: req.params }, {subcriptions : usuario });

    res.status(200).json({
        ok : true, msg : 'todo bien', data : rs
    });
}

module.exports = {
    getUsuarios,
    addUsuarios,
    updateUsuarios
}