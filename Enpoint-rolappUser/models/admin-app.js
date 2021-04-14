const { Schema , model} = require('mongoose');

const AppSchema = Schema ({
    nombre: {
        type : String,
        required : true
    },
    estado: {
        type : String,
        required : true
    }, 
    fecha: {
        type : Date,
        required : true
    },
}
,
{
    timestamps: true
})


module.exports = model('AppAdmin' , AppSchema );