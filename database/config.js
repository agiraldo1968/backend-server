const mongoose = require('mongoose')

const dbConnection = async () => {

    try
    {
        await mongoose.connect(process.env.DB_CNN,
                     {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

        console.log('Base de datos en línea')

    }
    catch(error)
    {
        throw new Error('Error iniciando la conexión a bd')
    }

}

module.exports = {
    dbConnection
}