import connect from "./db.js";
import poublish from "../Models/PublishModel.js";
import user from "../Models/UserModel.js";

async function truncate() {
    try {
        // Autenticación de la base de datos antes de realizar operaciones
        await connect.authenticate();
        
        // Eliminar todos los registros en las tablas, con opción de cascada
        await poublish.truncate({ cascade: true });
        await user.truncate({ cascade: true });
        
        // Sincronizar la base de datos si es necesario
        await connect.sync({ force: true });
        
        console.log('Base de datos limpiada');
    } catch (error) {
        console.error('Error al limpiar la base de datos:', error);
    }
}

truncate();
