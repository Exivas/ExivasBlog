import { Sequelize } from "sequelize";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl || databaseUrl === '') {
  throw new Error('DATABASE_URL no está definido o está vacío');
}

const connect = new Sequelize(databaseUrl, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Para Neon
    },
  },
});

export default connect;