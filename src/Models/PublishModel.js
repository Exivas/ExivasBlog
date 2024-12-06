import connect from "../Config/db.js"
import sq from "sequelize"

const publish = connect.define('publish', {
    id: {
        type: sq.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: sq.STRING(255),
        allowNull: false
    },
    content: {
        type: sq.JSONB,
        allowNull: true
    }, 
    createdAt: {
        type: sq.DATE,
        allowNull: false,
        defaultValue: sq.NOW()

    }
},{tableName: 'publish', timestamps: true});
export default publish