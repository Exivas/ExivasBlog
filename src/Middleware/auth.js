import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token =req.headers('authorization');
    if(!token){
        return res.status(401).json({message: "Unauthorized"})
    }
    try {
        const decoded = jwt.verify(token, process.env.KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
}}

export const isAdmin = (req, res, next) => {
    if(req.user.role !== 'admin'){
        return res.status(401).json({message: "Unauthorized"})
    }
    next();
}
