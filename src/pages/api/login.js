import bcrypt from 'bcrypt';
import Usuario from '/src/models/user';
import connectToDatabase from '/lib/mongodb';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;
    console.log('Login request received:', { email, password });

    try {
      await connectToDatabase();
      console.log('Connected to database');

      // Buscar el usuario por email
      const usuario = await Usuario.findOne({ email });
      console.log('User found:', usuario);

      if (!usuario) {
        console.log('User not found');
        return res.status(401).json({ message: 'User not found' });
      }

      // Comparar contraseñas
      const isMatch = await bcrypt.compare(password, usuario.contraseña);
      console.log('Password match:', isMatch);

      if (!isMatch) {
        console.log('Invalid password');
        return res.status(401).json({ message: 'Invalid password' });
      }

      // Generar el token JWT
      const token = jwt.sign(
        { id: usuario._id },
        process.env.JWT_SECRET, // Usa la clave desde las variables de entorno
        { expiresIn: '1h' }
      );
      console.log('Generated JWT token:', token);

      // Autenticación exitosa
      res.status(200).json({ 
        message: 'Login successful',
        token, // Devuelve el token al cliente
        user: {
          id: usuario._id,
          email: usuario.email,
          nombre: usuario.nombre,
          // Otros datos que quieras incluir
        }
      });
      console.log('Login successful, response sent');
    } catch (error) {
      console.error('Internal server error:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
