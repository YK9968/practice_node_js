import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { env } from './utils/env.js';

const PORT = Number(env('PORT', '3000'));

export const startServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.get('/', (req, res) => {
    res.json({
      message: 'hello',
    });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
      status: 404,
    });
  });

  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong',
      status: 500,
      error: err.message,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};
