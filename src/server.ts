import http from 'http';
import app from './app';
import { PORT } from './config/constants';

const server = http.createServer(app);
server.listen(PORT);

export default server;
