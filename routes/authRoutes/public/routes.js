const { Router } = require('express');

const userRepo = require('../../../repository/user.repository');
const authUtils = require('../../../utils/auth.utils')

const router = Router();

router.post('/signup', async (req, res) => {
  const user = await userRepo.register(req.body);
  return res.status(201).json(user);
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await userRepo.findUser(username);

  if (authUtils.compare(password, user.hash)) {
    return res.status(202).json({ message: `User ${user.username} loggedIn` });
  }
  return res.status(401).json({ message: 'Not Allowed' });
});

module.exports = router;
