import connect from "./db.js";
import poublish from "../Models/PublishModel.js";
import user from "../Models/UserModel.js";

async function truncate() {
    await poublish.truncate({ cascade: true });
    await user.truncate({ cascade: true });
    await connect.authenticate();
    await connect.sync({ force: true });
    console.log('Base de datos limpiada');
}

truncate();