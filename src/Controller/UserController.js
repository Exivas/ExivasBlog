import user from '../Models/UserModel.js';



export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await user.create({ username, email, password });
        res.status(201).json({ message: 'User created successfully', data: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
}   
export const getAllUsers= async (req, res)=>{
    try{
        const users = await user.findAll();
        res.json(users);

    }catch(e){
        res.json({message: e.message})

    }
}
export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);
        res.json(user);
    } catch (e) {
        res.json({ message: e.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, email, password } = req.body;
        const user = await User.findByPk(id);
        user.username = username;
        user.email = email;
        user.password = password;
        await user.save();
        res.json({ message: "User updated successfully" });
    } catch (e) {
        res.json({ message: e.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await user.destroy({ where: { id } }); 
        res.json({ message: "User deleted successfully" });
    } catch (e) {
        res.json({ message: e.message });
    }
};




