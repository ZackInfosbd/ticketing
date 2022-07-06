import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { signupRouter } from './routes/signup';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { currentuserRouter } from './routes/current-user';
import { errorHandler } from './middleware/error-handler';
import { NotFoundError } from './errors/not-found-error';

const app = express();

// Middlewares
app.use(json());

// Routes
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentuserRouter);

app.all('*', (req, res, next) => {
  // next(new NotFoundError());
  throw new NotFoundError();
});

// Middlewares
app.use(errorHandler);

app.listen(3000, () => {
  console.log(`🚀 Auth Server listening on port 3000!`);
});
