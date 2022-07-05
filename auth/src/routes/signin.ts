import express from 'express';

const router = express();

router.post('/api/users/signin', (req, res) => {
  res.send('log from signin route');
});

export { router as signinRouter };
