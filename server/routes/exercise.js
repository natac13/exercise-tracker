import express from 'express';
import format from 'date-fns/fp/format';
import User from '../models/user';
import Exercise from '../models/exercise';
import { optionalCallExpression } from '@babel/types';

const router = express.Router();

router.post('/add', async (req, res, next) => {
  const { body } = req;
  const { userId, description, duration, date } = body;
  if (!body) {
    return next();
  }

  if (!userId || !description || !duration) {
    return res.json({ error: `Missing fields that are required.` });
  }

  const user = await User.findById(userId);
  if (!user) {
    return res.json({ error: `No user with given id: ${userId}` });
  }

  const exerciseDoc = {
    username: user.username,
    description,
    duration,
    date,
    userId,
  };

  const newExercise = await Exercise.create(exerciseDoc);
  return res.json({
    _id: newExercise.id,
    username: user.username,
    description: newExercise.description,
    duration: newExercise.duration,
    date: format('yyyy-MM-dd')(newExercise.date),
  });
});

router.get('/log', async (req, res, next) => {
  const { query } = req;
  console.log(query);
  const { userId, from, to, limit } = query;

  if (!userId) {
    return res.send('Required a userId to search.');
  }
  const options = {};
  const conditions = { userId };
  if (from) {
    conditions.date = { $gte: from };
  }
  if (to) {
    conditions.date = { ...conditions.date, $lte: to };
  }
  const limitNumber = parseInt(limit, 10);
  if (limitNumber || limitNumber === 0) {
    const exersices = await Exercise.find(conditions, { __v: 0 }).limit(
      limitNumber
    );
    return res.json(exersices).status(200);
  }
  const exersices = await Exercise.find(conditions, { __v: 0 });
  return res.json(exersices).status(200);
});

export default router;
