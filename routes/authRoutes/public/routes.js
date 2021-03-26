const jwt = require('jsonwebtoken');
const { Router } = require('express');

const userRepo = require('../../../repository/user.repository');
const authUtils = require('../../../utils/auth.utils');


const router = Router();

router.post('/signup', async (req, res) => {
  const user = await userRepo.register(req.body);
  return res.status(201).json(user);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await userRepo.findUser(username);

  if (!user) {
    return res.status(400).json();
  }

  if (!authUtils.compare(password, user.hash)) {
    return res.status(400).json();
  }

  const payload = { id: user.id };

  const token = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { expiresIn: process.env.EXPIRATION_AUTH_TOKEN },
  );
  res.set('Access-Control-Allow-Origin');
  res.set('Authorization', token);
  return res.status(204).json();
});

module.exports = router;
