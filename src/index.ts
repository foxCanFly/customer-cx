import './init';

import bodyParser from 'body-parser';
import express from 'express';
import * as process from 'process';

import { config } from './features/config';
import { Logger } from './infra/logger';
import { handleRequest } from './routing/root';

const bootstrap = async () => {
  try {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.post('/', async (req, res) => {
      const response = await handleRequest(req.body);
      return res.json(response);
    });

    app.listen(config.PORT);

    Logger.info('= = = = =');
    Logger.info('APP IS RUNNING: ', { ...config });
    Logger.info('= = = = =');
  } catch (error) {
    Logger.error(error);
    process.exit(1);
  }
};

void bootstrap();
