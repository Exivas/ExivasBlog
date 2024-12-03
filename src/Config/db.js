import { Sequelize } from "sequelize";

// Crear la conexión a la base de datos
const connect = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'root',
  database: 'blog'
});

export default connect;
