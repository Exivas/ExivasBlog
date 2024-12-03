import sq from "sequelize";
const connect = new sq.Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'blog'
})

export default connect