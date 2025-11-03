const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret-test';
const users = [
  { email: 'admin@mail.com', password: '1234', role: 'admin' },
  { email: 'agent@mail.com', password: '1234', role: 'agent' },
  { email: 'collecteur@mail.com', password: '1234', role: 'collecteur' },
  { email: 'citoyen@mail.com', password: '1234', role: 'citoyen' },
];

class AuthController {
  static async pageLogin(req, res) {
    res.render('login', { error: null });
  }
  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        return res.render('login', { error: 'Email ou mot de passe invalide' });
      }

      const token = jwt.sign(
        { email: user.email, role: user.role },
        SECRET_KEY,
        { expiresIn: '2h' }
      );

      res.cookie('token', token, { httpOnly: true });

      switch (user.role) {
        case 'admin':
          return res.redirect('/admin/dashboard');
        case 'agent':
          return res.redirect('/agent/dashboard');
        case 'collecteur':
          return res.redirect('/collecteur/dashboard');
        case 'citoyen':
          return res.redirect('/citoyen/dashboard');
        default:
          return res.redirect('/');
      }
    } catch (err) {
      console.error('Erreur login :', err);
      res.status(500).send('Erreur serveur');
    }
  }

  static async apiLogin(req, res) {
    try {
      const { email, password } = req.body;
      const user = users.find(u => u.email === email && u.password === password);

      if (!user) {
        return res.status(401).json({ message: 'Email ou mot de passe invalide' });
      }

      const token = jwt.sign(
        { email: user.email, role: user.role },
        SECRET_KEY,
        { expiresIn: '2h' }
      );

      res.status(200).json({ token, role: user.role });
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur' });
    }
  }

  static async logout(req, res) {
    res.clearCookie('token');
    res.redirect('/login');
  }
}

module.exports = AuthController;
