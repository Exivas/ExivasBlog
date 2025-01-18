import user from '../Models/UserModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
    const { username, email, password, role } = req.body;
    const existingUser = await user.findOne({ where: { email } });

    if (existingUser) {
        return res.status(400).json({ message: 'Email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({ username, email, password:hashedPassword,role });
    const token = jwt.sign({ id: newUser.id }, process.env.KEY, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', data: newUser, token });
}

export const loginUser = async (req, res) => {
    const { username, password } = req.body;
    
    const users = await user.findOne({ where: { username } });

    if (!users) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isPasswordValid = await bcrypt.compare(password, users.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: users.id, role: users.role, username: users.username }, process.env.KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', data: users, token });
}

export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await user.create({ username, email, password,role});
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
        const User = await user.findByPk(id);
        res.json(User);
    } catch (e) {
        res.json({ message: e.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { username, email, password, role } = req.body;
        const User = await user.findByPk(id);
        User.username = username;
        User.email = email;
        User.password = password;
        User.role = role;
        await User.save();
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




