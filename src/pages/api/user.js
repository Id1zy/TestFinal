import connectToDatabase from '/lib/mongodb';
import Usuario from '/src/models/user';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await connectToDatabase();

  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'No autorizado, token no proporcionado' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token decodificado:', decoded);

    // Buscar el usuario por ID (extraído del token)
    const usuario = await Usuario.findById(decoded.id);
    console.log('Usuario encontrado:', usuario);

    if (!usuario) {
      return res.status(404).json({ success: false, message: 'Usuario no encontrado' });
    }

    // Devolver los datos del usuario autenticado
    res.status(200).json({ success: true, data: usuario });
  } catch (error) {
    console.error('Error al verificar el token o al buscar el usuario:', error);
    res.status(400).json({ success: false, message: 'Token inválido o error al buscar el usuario', error: error.message });
  }
}
