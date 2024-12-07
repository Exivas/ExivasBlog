import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Obtén el token del encabezado "Authorization"
    console.log("Token recibido:", token); // Verifica que el token esté llegando correctamente

    if (!token) {
        return res.status(401).json({ message: "No hay token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.KEY); // Verifica y decodifica el token
        console.log("Token decodificado:", decoded); // Verifica qué contiene el token decodificado
        req.user = decoded; // Asigna el contenido del token a req.user
        next(); // Continúa con la siguiente acción
    } catch (error) {
        return res.status(401).json({ message: "Token no válido" });
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') { // Verifica si el usuario tiene el rol 'admin'
        return res.status(401).json({ message: "Unauthorized" });
    }
    next(); // Continúa con la siguiente acción si es admin
};
