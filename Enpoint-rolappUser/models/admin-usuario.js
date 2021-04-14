const { Schema , model} = require('mongoose');

const Rol = require('./admin-roles');
const AppAdmin = require('./admin-app');



const UsuarioSchema = Schema ({
    nombre: {
        type : String,
        required : true
    },
    apellido: {
        type : String,
        required : true
    },
    edad: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    roles: [{
        idRol: { type: Schema.Types.ObjectId, ref :Rol},
    }],
    applicaiones: [{
        idApp : { type : Schema.Types.ObjectId, ref: AppAdmin } 
    }],
    
})

module.exports = model('UsuarioAdmin' , UsuarioSchema );