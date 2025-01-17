import { Sequelize } from "sequelize";

const isRemote = process.env.DATABASE_URL && process.env.DATABASE_URL !== '';

const connect = isRemote
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  : new Sequelize({
      dialect: 'postgres',
      host: 'localhost',
      username: process.env.USER,
      password: process.env.PASS,
      database: process.env.DATABASE
    });

export default connect;