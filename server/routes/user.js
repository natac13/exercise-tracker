import express from 'express';
import User from '../models/user';

const router = express.Router();

router.post('/new-user', async (req, res, next) => {
  const { body } = req;

  const { username } = body;
  if (!username) {
    return next();
  }
  const user = await User.findOne({ username });
  if (user) {
    res.json({ error: 'User already exist.' });
  }
  const newUser = await User.create({ username });

  const jsonRes = {
    username: newUser.username,
    _id: newUser._id, // eslint-disable-line
  };
  res.json(jsonRes).status(200);
});

export default router;
