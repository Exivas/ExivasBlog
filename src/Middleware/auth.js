import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    // Accede al encabezado de autorización correctamente
    const token = req.headers.authorization?.split(' ')[1];  // 'Bearer token'
    
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, process.env.KEY);
        req.user = decoded;  // Almacenar los datos del usuario decodificados
        next();  // Continuar con la siguiente función
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}

export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();  // Continuar si el usuario es admin
}
