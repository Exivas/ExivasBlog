import { Sequelize } from "sequelize";


// Crear la conexión a la base de datos
const connect = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: process.env.USER,
  password: process.env.PASS,
  database: process.env.DATABASE
});

export default connect;
