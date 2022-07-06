import express from 'express';
import { body } from 'express-validator';

const router = express();

router.get('/api/users/currentuser', (req, res) => {
  res.send('log from current user route');
});

export { router as currentUserRouter };
