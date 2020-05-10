import 'dotenv/config';
import express from 'express';
import path from 'path';
import routes from './routes';
import './database';

class App {
  // Here we receive the methods that we will use
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // Here put our middlewares
  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  // Here we will use the routes for our instance
  routes() {
    this.server.use(routes);
  }
}

// Export our express server instance
export default new App().server;
