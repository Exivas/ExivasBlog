import sq from "sequelize";
const connect = new sq.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
})

export default connect