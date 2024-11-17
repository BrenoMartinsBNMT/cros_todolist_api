import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { configDotenv } from 'dotenv';
import * as path from 'path';
import { TaskEntity } from 'src/Entity/Task.entity';
import { UserEntity } from 'src/Entity/User.entity';

export class PostgresService {
  public getTypeOrmConfig(): TypeOrmModuleOptions {
    const env = configDotenv().parsed;
    return {
      type: 'postgres',
      host: env.POSTGRES_HOST,
      port: parseInt(env.POSTGRES_PORT),
      username: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DB,

      entities: [UserEntity, TaskEntity],
      migrations: [path.join(__dirname, 'src/migrations/*{.ts,.js}')],

      ssl: env.POSTGRES_SSL === 'true',
      synchronize: true,
    };
  }
}

export const exportConfigPostgres = new PostgresService();
