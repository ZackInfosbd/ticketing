import express from 'express';
import { json } from 'body-parser';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { currentuserRouter } from './routes/current-user';

const app = express();

// Middlewares
app.use(json());

// Routes
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentuserRouter);

app.listen(3000, () => {
  console.log(`🚀 Auth Server listening on port 3000!`);
});
