import connect from "../Config/db.js"
import sq from "sequelize"


const user = connect.define('users', {
    id: {
    type: sq.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sq.STRING(50),
        allowNull: false
    },
    password: {
        type: sq.STRING(255),
        allowNull: false
    },
    email: {
        type: sq.STRING(255),
        allowNull: true
    },
    role: {
        type:sq.ENUM('admin','moderator', 'user'),
        allowNull: false,
        defaultValue: 'user'
        
    },
},{tableName: 'users', timestamps: false});

export default user