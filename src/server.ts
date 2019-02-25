import express from 'express';

import { PORT } from './config/constants';

const app = express();

const server = app.listen(
  PORT,
  () => console.log(`server started on port ${PORT}`) // eslint-disable-line
);

export default server;
