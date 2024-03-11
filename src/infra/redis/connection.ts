import Redis from 'ioredis';

import { config } from '../../features/config';

export const connection = new Redis({ port: config.REDIS_PORT, host: config.REDIS_HOST });
