

const { response } = require('express');
const Rol = require('../models/admin-roles');
const AppAdmin = require('../models/admin-app');


// get roler

const getRoles= async ( req, res = response) => {    
    try {
        
        const entidad = await Rol.find();
        res.status(200).json({
            ok : true, msg : 'todo bien', entidad
        });
    } catch (error) {
        console.log('ERROR DE OBTENER ROL');    
    }
}
const addRoles= async ( req, res = response) => {    
    try {
        
        const entidad = new Rol( req.body );
        console.log(req.entidad);
        await entidad.save();
        res.status(200).json({
            ok : true, msg : 'todo bien EC', entidad
        });
    } catch (error) {
        console.log(error);
    }
}

/// get appLICACIONES
const getAplicaciones= async ( req, res = response) => {    
    try {
        
        const entidad = await AppAdmin.find();
        res.status(200).json({
            ok : true, msg : 'todo bien', entidad
        });
    } catch (error) {
        console.log('ERROR DE OBTENER ROL');    
    }
}
const addAplicaciones = async ( req, res = response) => {    
    try {
        
        const entidad = new AppAdmin( req.body );
        console.log(req.body);
        await entidad.save();
        res.status(200).json({
            ok : true, msg : 'todo bien EC', entidad
    
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getRoles, addRoles,
    getAplicaciones, addAplicaciones

}